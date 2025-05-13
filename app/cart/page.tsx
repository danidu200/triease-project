"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()

  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Cart</h1>
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
            <h2 className="text-xl font-medium">Your cart is empty</h2>
            <p className="text-gray-500">Looks like you haven't added any products to your cart yet.</p>
            <Link href="/products">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-white">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Items ({items.length})</h2>
                  <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b last:border-0">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Unit Price: ${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-white p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Link href="/checkout">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Proceed to Checkout</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Shipping is free for orders over $50.</p>
                <p className="mt-1">Taxes are calculated based on your shipping address.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
