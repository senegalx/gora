import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SizeGuidePage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Guide des tailles</h1>
          <p className="text-muted-foreground">
            Trouvez la taille parfaite pour votre chapeau avec notre guide détaillé.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Comment mesurer votre tour de tête</h2>
            <p className="text-muted-foreground">
              Pour trouver la taille de chapeau qui vous convient parfaitement, suivez ces étapes simples :
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Prenez un mètre ruban souple.</li>
              <li>
                Placez le mètre autour de votre tête, juste au-dessus des oreilles et à environ 1 cm au-dessus des
                sourcils.
              </li>
              <li>Assurez-vous que le mètre est bien à plat et n'est pas tordu.</li>
              <li>Notez la mesure en centimètres.</li>
              <li>Référez-vous à notre tableau des tailles ci-dessous pour trouver votre taille de chapeau.</li>
            </ol>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gk91vMxWMAAZlwQ-Tthw72GbPmXirKzVHnkBXP3c2a5jyk.jpeg"
                alt="Comment mesurer votre tour de tête"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tableau des tailles</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-4 py-2 text-left">Taille</th>
                    <th className="border px-4 py-2 text-left">Tour de tête (cm)</th>
                    <th className="border px-4 py-2 text-left">Équivalent (pouces)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">XS</td>
                    <td className="border px-4 py-2">53-54</td>
                    <td className="border px-4 py-2">20⅞-21¼</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">S</td>
                    <td className="border px-4 py-2">55-56</td>
                    <td className="border px-4 py-2">21⅝-22</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">M</td>
                    <td className="border px-4 py-2">57-58</td>
                    <td className="border px-4 py-2">22⅜-22¾</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">L</td>
                    <td className="border px-4 py-2">59-60</td>
                    <td className="border px-4 py-2">23⅛-23½</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">XL</td>
                    <td className="border px-4 py-2">61-62</td>
                    <td className="border px-4 py-2">24-24⅜</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">XXL</td>
                    <td className="border px-4 py-2">63-64</td>
                    <td className="border px-4 py-2">24¾-25⅛</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">XXXL</td>
                    <td className="border px-4 py-2">65-66</td>
                    <td className="border px-4 py-2">25½-26</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conseils pour un ajustement parfait</h2>
            <Tabs defaultValue="general">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">Conseils généraux</TabsTrigger>
                <TabsTrigger value="too-small">Si trop petit</TabsTrigger>
                <TabsTrigger value="too-large">Si trop grand</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-2">
                <p>
                  Un chapeau bien ajusté doit être confortable sans être trop serré. Il doit reposer environ 1 cm
                  au-dessus des oreilles et des sourcils.
                </p>
                <p>
                  Si vous êtes entre deux tailles, choisissez la taille supérieure et utilisez nos conseils d'ajustement
                  pour un confort optimal.
                </p>
              </TabsContent>
              <TabsContent value="too-small" className="space-y-2">
                <p>
                  Si votre chapeau est légèrement trop petit, vous pouvez essayer de l'étirer doucement. Placez le
                  chapeau sur un objet rond légèrement plus grand que votre tête (comme un ballon légèrement gonflé)
                  pendant 24-48 heures.
                </p>
                <p>
                  Pour les chapeaux en coton, vous pouvez les vaporiser légèrement avec de l'eau tiède avant de les
                  étirer.
                </p>
              </TabsContent>
              <TabsContent value="too-large" className="space-y-2">
                <p>
                  Si votre chapeau est trop grand, vous pouvez utiliser des bandes de mousse adhésive à l'intérieur du
                  bandeau pour réduire la taille.
                </p>
                <p>
                  Alternativement, vous pouvez coudre un ruban élastique fin à l'intérieur du bandeau pour un meilleur
                  ajustement.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Les tailles varient-elles selon les modèles de chapeaux ?",
                  answer:
                    "Bien que nous nous efforcions de maintenir une cohérence dans nos tailles, il peut y avoir de légères variations selon le style et le matériau du chapeau. Nous recommandons toujours de vérifier les mesures spécifiques indiquées dans la description de chaque produit.",
                },
                {
                  question: "Comment savoir si mon chapeau est bien ajusté ?",
                  answer:
                    "Un chapeau bien ajusté doit être confortable sans être trop serré. Il ne doit pas laisser de marques sur votre front et ne doit pas glisser lorsque vous bougez la tête. Il doit reposer environ 1 cm au-dessus des oreilles et des sourcils.",
                },
                {
                  question: "Puis-je retourner un chapeau si la taille ne convient pas ?",
                  answer:
                    "Oui, vous pouvez retourner ou échanger votre chapeau dans les 30 jours suivant l'achat si la taille ne convient pas. Consultez notre politique de retour pour plus de détails.",
                },
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/boutique">
              <Button size="lg">Découvrir nos chapeaux</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

