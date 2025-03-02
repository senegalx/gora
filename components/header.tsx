import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
            <Image src="/logo.jpeg" alt="Logo Chapeaux Artisanaux" fill className="object-cover" />
          </div>
          <span className="hidden sm:inline-block">Chapeaux Artisanaux</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="/" className="text-lg font-medium hover:text-primary">
                  Accueil
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/boutique" className="text-lg font-medium hover:text-primary">
                  Boutique
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/a-propos" className="text-lg font-medium hover:text-primary">
                  À propos
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact" className="text-lg font-medium hover:text-primary">
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="nav-link text-sm font-medium">
            Accueil
          </Link>
          <Link href="/boutique" className="nav-link text-sm font-medium">
            Boutique
          </Link>
          <Link href="/a-propos" className="nav-link text-sm font-medium">
            À propos
          </Link>
          <Link href="/contact" className="nav-link text-sm font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/panier" className="relative text-sm font-medium hover:text-primary transition-colors">
            Panier
            <span className="absolute -top-2 -right-4 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" size="sm">
              Se connecter
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              S'inscrire
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

