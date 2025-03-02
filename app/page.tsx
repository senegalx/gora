import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { featuredProducts } from "@/lib/products"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Chapeaux brodés artisanaux
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Découvrez notre collection unique de chapeaux brodés à la main, alliant tradition et modernité.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/boutique">
                  <Button size="lg">Découvrir la collection</Button>
                </Link>
                <Link href="/a-propos">
                  <Button size="lg" variant="outline">
                    Notre histoire
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMpWEAAazPp-3FVItYj6U9ykH394LPcX9i9bHppWAM.jpeg"
                alt="Collection de chapeaux brodés"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nos collections</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorez nos différentes collections de chapeaux brodés, chacune avec son propre style et son histoire.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/boutique">
              <Button variant="outline" className="gap-1">
                Voir tous les produits
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Notre savoir-faire</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Chaque chapeau est fabriqué à la main par nos artisans qualifiés, utilisant des techniques
                traditionnelles transmises de génération en génération.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Nos motifs brodés racontent des histoires et représentent notre patrimoine culturel, tout en apportant
                une touche contemporaine à chaque création.
              </p>
              <Link href="/a-propos">
                <Button variant="outline">En savoir plus</Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMqWMAAA7ja-K7P3Xqm9mVvzBLkHrUA0iAgN8W8dXP.jpeg"
                alt="Artisan chapelier"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Guide des tailles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trouvez la taille parfaite pour votre chapeau avec notre guide détaillé.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-3xl h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMxWMAAZlwQ-Tthw72GbPmXirKzVHnkBXP3c2a5jyk.jpeg"
                alt="Guide des tailles de chapeaux"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/guide-tailles">
              <Button>Consulter le guide complet</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Inscrivez-vous à notre newsletter
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Recevez en avant-première nos nouvelles collections et offres exclusives.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Votre email"
                  type="email"
                />
                <Button type="submit" variant="secondary">
                  S'inscrire
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

