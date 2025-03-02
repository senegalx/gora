import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  material?: string
  description?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("fr-FR")
  }

  return (
    <div className="product-card group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300">
      <Link href={`/boutique/${product.id}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.isNew && <Badge className="absolute left-2 top-2 bg-primary hover:bg-primary/90">Nouveau</Badge>}
        {product.isSale && (
          <Badge className="absolute left-2 top-2 bg-destructive hover:bg-destructive/90">Promo</Badge>
        )}
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-right font-medium text-primary">{formatPrice(product.price)} FCFA</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link href={`/boutique/${product.id}`}>Voir détails</Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary transition-colors">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Ajouter aux favoris</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

