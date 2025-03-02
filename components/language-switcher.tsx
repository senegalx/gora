"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("fr")

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    // Ici, vous pourriez implémenter la logique pour changer la langue de l'application
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Changer de langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("fr")}
          className={currentLanguage === "fr" ? "bg-muted" : ""}
        >
          Français
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={currentLanguage === "en" ? "bg-muted" : ""}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

