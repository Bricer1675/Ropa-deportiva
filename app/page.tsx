import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import type { Product } from "@/components/cart-context"

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Conjunto Deportivo Rosa",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto deportivo cómodo y elegante, perfecto para entrenar con estilo.",
  },
  {
    id: "2",
    name: "Top Deportivo Lavanda",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Top deportivo con soporte medio, ideal para yoga y pilates.",
  },
  {
    id: "3",
    name: "Leggings Premium",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Leggings de alta calidad con tecnología anti-humedad.",
  },
  {
    id: "4",
    name: "Conjunto Completo Gris",
    price: 55.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto completo para un look deportivo sofisticado.",
  },
]

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Bienvenida a <span className="text-purple-600">Artesanías</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre nuestra colección exclusiva de ropa interior femenina, diseñada para brindarte comodidad y
            elegancia en cada momento.
          </p>
          <Link href="/catalogo">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3">
              Explorar Catálogo
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDescription={false} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 py-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-purple-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
          <p className="text-gray-600">Materiales de la más alta calidad para tu comodidad diaria.</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-purple-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Envío Gratis</h3>
          <p className="text-gray-600">Envío gratuito en compras superiores a $50.</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-purple-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💝</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño Exclusivo</h3>
          <p className="text-gray-600">Diseños únicos creados especialmente para ti.</p>
        </div>
      </section>
    </div>
  )
}
