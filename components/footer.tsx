import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Image src="/logo.jpeg" alt="Logo Chapeaux Artisanaux" width={30} height={30} />
            <span>Chapeaux Artisanaux</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chapeaux Artisanaux. Tous droits réservés.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:underline">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:underline">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Catégories</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/boutique/unisexe" className="hover:underline">
                  Unisexes
                </Link>
              </li>
              <li>
                <Link href="/boutique/traditionnels" className="hover:underline">
                  Traditionnels
                </Link>
              </li>
              <li>
                <Link href="/boutique/casual" className="hover:underline">
                  Casual
                </Link>
              </li>
              <li>
                <Link href="/boutique/ceremonie" className="hover:underline">
                  Cérémonie
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Aide</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="hover:underline">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/retours" className="hover:underline">
                  Retours
                </Link>
              </li>
              <li>
                <Link href="/guide-tailles" className="hover:underline">
                  Guide des tailles
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Légal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/conditions" className="hover:underline">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:underline">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

