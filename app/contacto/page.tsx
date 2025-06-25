"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ nombre: "", email: "", mensaje: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda? Charles y nuestro equipo están aquí para asistirte. ¡No dudes en
          contactarnos!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👋</span>
                </div>
                Hola, soy Charles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Como fundador de Artesanías, me dedico personalmente a asegurar que cada cliente reciba la mejor
                atención y productos de la más alta calidad. Estoy aquí para resolver cualquier duda que tengas sobre
                nuestros productos o servicios.
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-gray-600">charles@artesanias.com</p>
                <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                </div>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Lun - Vie, 9AM - 6PM</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                </div>
                <p className="text-gray-600">123 Fashion Street</p>
                <p className="text-gray-600">Ciudad, Estado 12345</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold text-gray-800">Horarios</h3>
                </div>
                <p className="text-gray-600">Lun - Vie: 9AM - 6PM</p>
                <p className="text-gray-600">Sáb: 10AM - 4PM</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Envíanos un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Gracias por contactarnos. Charles te responderá pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-700">
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-gray-700">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3">
                  Enviar Mensaje
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
