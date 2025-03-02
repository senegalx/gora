import Image from "next/image"
import { Heart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getProductById } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return <div>Produit non trouvé</div>
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - Vue ${i + 1}`}
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Star className="h-5 w-5 fill-primary" />
                <Star className="h-5 w-5 fill-primary" />
                <Star className="h-5 w-5 fill-primary" />
                <Star className="h-5 w-5 fill-primary" />
                <Star className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">4.0 (12 avis)</span>
              </div>
            </div>
            <div className="text-3xl font-bold">{product.price} FCFA</div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="color">Couleur</Label>
              <RadioGroup id="color" defaultValue="noir" className="flex flex-wrap gap-2">
                {["noir", "bleu", "vert", "jaune", "gris"].map((color) => (
                  <Label
                    key={color}
                    htmlFor={`color-${color}`}
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id={`color-${color}`} value={color} />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Taille</Label>
              <Select defaultValue="m">
                <SelectTrigger id="size">
                  <SelectValue placeholder="Sélectionner une taille" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xs">XS (53-54cm)</SelectItem>
                  <SelectItem value="s">S (55-56cm)</SelectItem>
                  <SelectItem value="m">M (57-58cm)</SelectItem>
                  <SelectItem value="l">L (59-60cm)</SelectItem>
                  <SelectItem value="xl">XL (61-62cm)</SelectItem>
                  <SelectItem value="xxl">XXL (63-64cm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantité</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  -
                </Button>
                <Input id="quantity" type="number" defaultValue="1" className="h-8 w-20 text-center" />
                <Button variant="outline" size="icon" className="h-8 w-8">
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="w-full">
                Ajouter au panier
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Ajouter aux favoris
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="reviews">Avis</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Description du produit</h3>
                  <p>{product.description}</p>
                  <p>
                    Chaque chapeau est fabriqué à la main par nos artisans qualifiés, utilisant des techniques
                    traditionnelles transmises de génération en génération. Les motifs brodés racontent des histoires et
                    représentent notre patrimoine culturel.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Caractéristiques</h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Matériau: {product.material}</li>
                    <li>Broderie: Faite à la main</li>
                    <li>Entretien: Lavage à la main recommandé</li>
                    <li>Origine: Fabriqué en France</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Livraison et retours</h3>
                  <p>
                    Livraison gratuite pour les commandes supérieures à 50 000 FCFA. Délai de livraison estimé: 3-5 jours
                    ouvrables. Retours acceptés dans les 30 jours suivant la réception.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Avis clients</h3>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="space-y-2 border-b pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Client {i + 1}</div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">Il y a {i + 1} mois</div>
                        </div>
                        <p className="text-sm">
                          Très satisfait de mon achat. La qualité est excellente et la broderie est magnifique. Je
                          recommande vivement !
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Laisser un avis</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Button key={i} variant="ghost" size="icon" className="h-8 w-8">
                          <Star className="h-5 w-5" />
                        </Button>
                      ))}
                    </div>
                    <Textarea placeholder="Partagez votre expérience avec ce produit..." />
                    <Button>Soumettre</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold">Produits similaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Produit similaire ${i + 1}`}
                  width={300}
                  height={300}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Chapeau brodé - Style {i + 1}</h3>
                <div className="text-sm text-muted-foreground">20 000 FCFA</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

