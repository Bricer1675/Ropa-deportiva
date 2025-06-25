import ProductCard from "@/components/product-card"
import type { Product } from "@/components/cart-context"
import { Badge } from "@/components/ui/badge"

const offerProducts: Product[] = [
  {
    id: "13",
    name: "Pack 3 Pantys Básicos",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Pack de 3 pantys básicos en colores neutros. ¡Precio especial!",
  },
  {
    id: "14",
    name: "Conjunto Promocional",
    price: 35.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto completo en oferta especial. Brasier + panty a precio increíble.",
  },
  {
    id: "15",
    name: "Brasier Liquidación",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Brasier de temporada anterior en liquidación. ¡Últimas tallas!",
  },
  {
    id: "16",
    name: "Pack Deportivo",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Pack deportivo completo: 2 tops + 1 legging. Oferta limitada.",
  },
]

export default function OfertasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Ofertas Especiales</h1>
          <Badge variant="destructive" className="bg-red-500 text-white">
            ¡OFERTA!
          </Badge>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aprovecha nuestras ofertas especiales y descuentos exclusivos. ¡Productos de calidad a precios increíbles!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">🎉 Promoción Especial</h2>
        <p className="text-purple-700">Envío gratis en compras superiores a $40 + 15% de descuento adicional</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerProducts.map((product) => (
          <div key={product.id} className="relative">
            <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white">-30%</Badge>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-12 bg-purple-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿No encontraste lo que buscabas?</h3>
        <p className="text-gray-600 mb-6">
          Suscríbete a nuestro newsletter y sé la primera en conocer nuestras nuevas ofertas y productos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu email aquí..."
            className="flex-1 px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  )
}
