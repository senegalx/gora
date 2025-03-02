import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CartPage() {
  const cartItems = [
    {
      id: "1",
      name: "Chapeau brodé en coton - Collection Printemps",
      price: 25000,
      quantity: 1,
      color: "Noir",
      size: "M",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Chapeau traditionnel - Motif géométrique",
      price: 35000,
      quantity: 1,
      color: "Bleu",
      size: "L",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const formatPrice = (price: number) => {
    return price.toLocaleString("fr-FR")
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 2500
  const total = subtotal + shipping

  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Votre panier</h1>
          <p className="text-muted-foreground">Vérifiez vos articles avant de procéder au paiement.</p>
        </div>
        {cartItems.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex justify-between">
                        <Link href={`/boutique/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                        <div className="font-medium">{item.price.toLocaleString("fr-FR")} FCFA</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Couleur: {item.color}, Taille: {item.size}
                      </div>
                      <div className="mt-auto flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            -
                          </Button>
                          <Input type="number" min="1" value={item.quantity} className="h-8 w-12 text-center" />
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            +
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Supprimer</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/boutique">Continuer les achats</Link>
                </Button>
                <Button variant="ghost" className="text-muted-foreground">
                  Vider le panier
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h2 className="font-medium">Résumé de la commande</h2>
                <Separator className="my-4" />
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span>{formatPrice(subtotal)} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frais de livraison</span>
                    <span>{formatPrice(shipping)} FCFA</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatPrice(total)} FCFA</span>
                  </div>
                </div>
                <Button className="mt-4 w-full">Procéder au paiement</Button>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="font-medium">Code promo</h2>
                <div className="mt-2 flex gap-2">
                  <Input placeholder="Entrez votre code" />
                  <Button variant="outline">Appliquer</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="font-medium">Livraison estimée</h2>
                <Select defaultValue="standard">
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Sélectionner une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (3-5 jours) - 2 500 FCFA</SelectItem>
                    <SelectItem value="express">Express (1-2 jours) - 5 000 FCFA</SelectItem>
                    <SelectItem value="free">Gratuite (Commande {">"} 30 000 FCFA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <div className="text-center">
              <h2 className="text-xl font-medium">Votre panier est vide</h2>
              <p className="mt-1 text-muted-foreground">Vous n'avez pas encore ajouté d'articles à votre panier.</p>
            </div>
            <Button asChild>
              <Link href="/boutique">Découvrir nos produits</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

