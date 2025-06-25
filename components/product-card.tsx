"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart, type Product } from "@/components/cart-context"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
  showDescription?: boolean
}

export default function ProductCard({ product, showDescription = true }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
          {showDescription && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>}
          <p className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
