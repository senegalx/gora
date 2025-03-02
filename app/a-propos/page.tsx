import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de nous</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Découvrez l'histoire et les valeurs derrière notre marque de chapeaux brodés artisanaux.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notre histoire</h2>
            <p className="text-muted-foreground">
              Notre aventure a commencé il y a plus de 20 ans, lorsque notre fondateur a décidé de préserver et de
              moderniser l'art traditionnel de la broderie sur chapeaux. Ce qui a commencé comme un petit atelier
              familial s'est transformé en une entreprise reconnue pour la qualité et l'authenticité de ses créations.
            </p>
            <p className="text-muted-foreground">
              Chaque chapeau raconte une histoire unique, inspirée par notre riche patrimoine culturel et réinterprétée
              avec une touche contemporaine. Nos artisans qualifiés perpétuent des techniques ancestrales tout en
              innovant constamment pour créer des pièces uniques qui traversent les générations.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMqWMAAA7ja-K7P3Xqm9mVvzBLkHrUA0iAgN8W8dXP.jpeg"
              alt="Notre histoire"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] order-last lg:order-first">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMpWEAAazPp-3FVItYj6U9ykH394LPcX9i9bHppWAM.jpeg"
              alt="Nos valeurs"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Nos valeurs</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Artisanat authentique</h3>
                <p className="text-muted-foreground">
                  Nous croyons en la valeur du travail manuel et de l'artisanat traditionnel. Chaque chapeau est
                  fabriqué à la main avec soin et attention aux détails.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Durabilité</h3>
                <p className="text-muted-foreground">
                  Nous nous engageons à utiliser des matériaux durables et des pratiques respectueuses de
                  l'environnement dans toutes nos créations.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Innovation</h3>
                <p className="text-muted-foreground">
                  Tout en respectant les traditions, nous cherchons constamment à innover et à créer des designs
                  contemporains qui répondent aux besoins actuels.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Notre processus de fabrication</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-medium">Sélection des matériaux</h3>
              <p className="text-muted-foreground">
                Nous sélectionnons soigneusement les meilleurs matériaux pour nos chapeaux, en privilégiant la qualité
                et la durabilité.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-medium">Conception et broderie</h3>
              <p className="text-muted-foreground">
                Nos artisans créent des motifs uniques et les brodent à la main sur chaque chapeau, un processus qui
                peut prendre plusieurs jours.
              </p>
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-medium">Finition et contrôle qualité</h3>
              <p className="text-muted-foreground">
                Chaque chapeau est soigneusement vérifié pour s'assurer qu'il répond à nos normes élevées avant d'être
                envoyé à nos clients.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Notre équipe</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Derrière chaque chapeau se trouve une équipe passionnée d'artisans, de designers et de professionnels
            dévoués à créer des produits exceptionnels.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="overflow-hidden rounded-full mx-auto">
                  <Image
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={`Membre de l'équipe ${i + 1}`}
                    width={150}
                    height={150}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Nom Prénom</h3>
                  <div className="text-sm text-muted-foreground">Poste</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 bg-muted p-6 rounded-lg">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Rejoignez notre aventure</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Vous souhaitez en savoir plus sur nos produits ou collaborer avec nous ? N'hésitez pas à nous contacter.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg">Contactez-nous</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

