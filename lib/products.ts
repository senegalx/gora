export const featuredProducts = [
  {
    id: "1",
    name: "Chapeau brodé en coton - Collection Printemps",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Unisexe",
    isNew: true,
    material: "100% coton",
    description:
      "Ce chapeau brodé à la main fait partie de notre collection Printemps. Il est fabriqué en coton de haute qualité et présente des motifs géométriques traditionnels.",
  },
  {
    id: "2",
    name: "Chapeau traditionnel - Motif géométrique",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Traditionnel",
    material: "Laine et coton",
    description:
      "Notre chapeau traditionnel avec des motifs géométriques complexes brodés à la main. Parfait pour les occasions spéciales.",
  },
  {
    id: "3",
    name: "Chapeau casual - Style urbain",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Casual",
    isSale: true,
    material: "Coton et polyester",
    description:
      "Un chapeau casual parfait pour un usage quotidien. Son style urbain et ses motifs brodés subtils en font un accessoire polyvalent.",
  },
  {
    id: "4",
    name: "Chapeau de cérémonie - Collection Élégance",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Cérémonie",
    material: "Laine premium",
    description:
      "Notre chapeau de cérémonie haut de gamme, avec des broderies élaborées et des finitions luxueuses. Idéal pour les mariages et événements formels.",
  },
]

export const allProducts = [
  ...featuredProducts,
  {
    id: "5",
    name: "Chapeau d'été - Motif floral",
    price: 22000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Casual",
    material: "Coton léger",
    description: "Un chapeau léger parfait pour l'été, avec de délicats motifs floraux brodés à la main.",
  },
  {
    id: "6",
    name: "Chapeau d'hiver - Collection Montagne",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Unisexe",
    material: "Laine et acrylique",
    description: "Un chapeau chaud et confortable pour l'hiver, avec des motifs inspirés des montagnes.",
  },
  {
    id: "7",
    name: "Chapeau festival - Édition limitée",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Casual",
    isNew: true,
    material: "Coton biologique",
    description: "Notre édition limitée pour les festivals, avec des broderies colorées et des détails uniques.",
  },
  {
    id: "8",
    name: "Chapeau minimaliste - Design épuré",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Unisexe",
    material: "Coton",
    description: "Un chapeau au design épuré avec une broderie minimaliste, parfait pour un style discret et élégant.",
  },
]

export function getProductById(id: string) {
  return allProducts.find((product) => product.id === id)
}

