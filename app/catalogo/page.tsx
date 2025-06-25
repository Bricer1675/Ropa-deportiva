import ProductCard from "@/components/product-card"
import type { Product } from "@/components/cart-context"

const catalogProducts: Product[] = [
  {
    id: "5",
    name: "Brasier Push-Up Encaje",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Brasier con encaje delicado y soporte push-up para realzar tu figura naturalmente.",
    category: "brasieres",
  },
  {
    id: "6",
    name: "Panty Bikini Algodón",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Panty bikini de algodón suave, perfecto para el uso diario.",
    category: "pantys",
  },
  {
    id: "7",
    name: "Conjunto Encaje Lavanda",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto completo de brasier y panty en encaje lavanda, elegante y cómodo.",
    category: "conjuntos",
  },
  {
    id: "8",
    name: "Brasier Deportivo Seamless",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Brasier deportivo sin costuras, ideal para actividades físicas.",
    category: "deportivo",
  },
  {
    id: "9",
    name: "Panty Tanga Microfibra",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Panty tanga en microfibra ultra suave, invisible bajo la ropa.",
    category: "pantys",
  },
  {
    id: "10",
    name: "Brasier Balconette",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Brasier balconette con copa semi-rígida para un escote perfecto.",
    category: "brasieres",
  },
  {
    id: "11",
    name: "Conjunto Satén Rosa",
    price: 54.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto de satén en tono rosa suave, perfecto para ocasiones especiales.",
    category: "conjuntos",
  },
  {
    id: "12",
    name: "Body Encaje Negro",
    price: 42.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Body de encaje negro elegante, perfecto para looks sofisticados.",
    category: "bodys",
  },
]

export default function CatalogoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Catálogo</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explora nuestra amplia selección de ropa interior femenina, diseñada para brindarte comodidad y elegancia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {catalogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
