"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/components/cart-context"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CarritoPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Agrega algunos productos a tu carrito para comenzar tu compra.</p>
          <Link href="/catalogo">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Ir al Catálogo
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Carrito de Compras</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.id} className="border-purple-100">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p className="text-lg font-bold text-purple-600 mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>

                    <span className="w-8 text-center font-semibold">{item.quantity}</span>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" onClick={clearCart} className="text-red-500 border-red-200 hover:bg-red-50">
              Vaciar Carrito
            </Button>
            <Link href="/catalogo">
              <Button variant="outline" className="bg-purple-50 border-purple-200 hover:bg-purple-100">
                Seguir Comprando
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="border-purple-100 sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${state.total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Envío:</span>
                <span className="font-semibold">{state.total > 50 ? "Gratis" : "$5.99"}</span>
              </div>

              <div className="border-t border-purple-100 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-purple-600">${(state.total + (state.total > 50 ? 0 : 5.99)).toFixed(2)}</span>
                </div>
              </div>

              {state.total < 50 && (
                <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-700">
                  Agrega ${(50 - state.total).toFixed(2)} más para envío gratis
                </div>
              )}

              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3">Finalizar Compra</Button>

              <div className="text-center text-sm text-gray-500">Compra segura y protegida</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
