import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "@/components/cart-context"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Artesanías - Ropa Interior Femenina",
  description: "Tienda especializada en ropa interior femenina de calidad",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-purple-50 border-t border-purple-100 py-8 mt-16">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; 2024 Artesanías. Todos los derechos reservados.</p>
              <p className="mt-2">Especialistas en ropa interior femenina de calidad</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
