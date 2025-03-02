import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Votre nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Informations de contact</h2>
              <p className="text-muted-foreground">
                Vous pouvez également nous contacter directement par téléphone, email ou en visitant notre atelier.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Rue des Artisans
                    <br />
                    75001 Paris
                    <br />
                    France
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">contact@chapeaux-artisanaux.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Horaires d'ouverture</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157081476!3d48.87456857928884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sPlace%20de%20l&#39;Op%C3%A9ra%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1646597440358!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-muted p-6 rounded-lg">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Foire aux questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Consultez notre FAQ pour trouver rapidement des réponses à vos questions les plus courantes.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Comment puis-je connaître ma taille de chapeau ?",
                answer:
                  "Vous pouvez consulter notre guide des tailles pour trouver la taille qui vous convient. Il suffit de mesurer le tour de votre tête et de vous référer au tableau.",
              },
              {
                question: "Quels sont les délais de livraison ?",
                answer:
                  "Les délais de livraison varient généralement entre 3 et 5 jours ouvrables pour la France métropolitaine, et entre 5 et 10 jours pour l'international.",
              },
              {
                question: "Puis-je personnaliser mon chapeau ?",
                answer:
                  "Oui, nous proposons des options de personnalisation pour la plupart de nos modèles. Contactez-nous pour discuter de vos besoins spécifiques.",
              },
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

