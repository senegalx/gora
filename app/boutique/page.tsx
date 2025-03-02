import { Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from "@/components/product-card"
import { allProducts } from "@/lib/products"

export default function ShopPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Boutique</h1>
          <p className="text-muted-foreground">Découvrez notre collection de chapeaux brodés artisanaux</p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1 md:hidden">
                <Filter className="h-3.5 w-3.5" />
                <span>Filtres</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <ShopFilters />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="grid">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid">
                  <Grid3X3 className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Select defaultValue="featured">
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Populaires</SelectItem>
                <SelectItem value="price-asc">Prix: Croissant</SelectItem>
                <SelectItem value="price-desc">Prix: Décroissant</SelectItem>
                <SelectItem value="newest">Nouveautés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
        <div className="hidden md:block">
          <ShopFilters />
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                8
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShopFilters() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-2">Catégories</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="unisexe" />
            <label
              htmlFor="unisexe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Unisexes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="traditionnels" />
            <label
              htmlFor="traditionnels"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Traditionnels
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="casual" />
            <label
              htmlFor="casual"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Casual
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ceremonie" />
            <label
              htmlFor="ceremonie"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cérémonie
            </label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Taille</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="xs" />
            <label
              htmlFor="xs"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XS (53-54cm)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="s" />
            <label
              htmlFor="s"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              S (55-56cm)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m" />
            <label
              htmlFor="m"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              M (57-58cm)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="l" />
            <label
              htmlFor="l"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              L (59-60cm)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="xl" />
            <label
              htmlFor="xl"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XL (61-62cm)
            </label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Couleur</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="rouge" />
            <label
              htmlFor="rouge"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Rouge
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bleu" />
            <label
              htmlFor="bleu"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bleu
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="vert" />
            <label
              htmlFor="vert"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Vert
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="noir" />
            <label
              htmlFor="noir"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Noir
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="blanc" />
            <label
              htmlFor="blanc"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Blanc
            </label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Type de tissu</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="coton" />
            <label
              htmlFor="coton"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Coton
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="laine" />
            <label
              htmlFor="laine"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Laine
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="synthetique" />
            <label
              htmlFor="synthetique"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Synthétique
            </label>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-2">Prix</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label htmlFor="min-price" className="text-sm">
              Min
            </label>
            <Input id="min-price" type="number" placeholder="20 000" className="h-8" />
          </div>
          <div className="space-y-1">
            <label htmlFor="max-price" className="text-sm">
              Max
            </label>
            <Input id="max-price" type="number" placeholder="45 000" className="h-8" />
          </div>
        </div>
      </div>
      <Button className="w-full">Appliquer les filtres</Button>
    </div>
  )
}

