"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, CreditCard, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

type CheckoutStep = "shipping" | "payment" | "review" | "confirmation"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    paymentMethod: "credit-card",
  })
  const router = useRouter()

  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax

  if (items.length === 0 && currentStep !== "confirmation") {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Checkout</h1>
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
            <h2 className="text-xl font-medium">Your cart is empty</h2>
            <p className="text-gray-500">Add some products to your cart before proceeding to checkout.</p>
            <Link href="/products">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
    window.scrollTo(0, 0)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("review")
    window.scrollTo(0, 0)
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    setCurrentStep("confirmation")
    clearCart()
    window.scrollTo(0, 0)
  }

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentMethodChange = (value: string) => {
    setPaymentInfo((prev) => ({ ...prev, paymentMethod: value }))
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        {currentStep !== "confirmation" ? (
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Checkout</h1>
            <div className="mt-4 flex items-center justify-center space-x-2 sm:space-x-4">
              <div className={`flex items-center ${currentStep === "shipping" ? "text-blue-600" : "text-gray-500"}`}>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === "shipping" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 hidden sm:inline">Shipping</span>
              </div>
              <div className="h-px w-8 bg-gray-300 sm:w-16"></div>
              <div className={`flex items-center ${currentStep === "payment" ? "text-blue-600" : "text-gray-500"}`}>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === "payment" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 hidden sm:inline">Payment</span>
              </div>
              <div className="h-px w-8 bg-gray-300 sm:w-16"></div>
              <div className={`flex items-center ${currentStep === "review" ? "text-blue-600" : "text-gray-500"}`}>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === "review" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 hidden sm:inline">Review</span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-3">
          {currentStep !== "confirmation" && (
            <div className="lg:col-span-2">
              {currentStep === "shipping" && (
                <div className="rounded-lg border bg-white p-6">
                  <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={handleShippingChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {currentStep === "payment" && (
                <div className="rounded-lg border bg-white p-6">
                  <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <RadioGroup
                        value={paymentInfo.paymentMethod}
                        onValueChange={handlePaymentMethodChange}
                        className="grid gap-4 sm:grid-cols-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Credit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="apple-pay" id="apple-pay" />
                          <Label htmlFor="apple-pay">Apple Pay</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentInfo.paymentMethod === "credit-card" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            value={paymentInfo.cardName}
                            onChange={handlePaymentChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentChange}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="expiryMonth">Expiry Month</Label>
                            <select
                              id="expiryMonth"
                              name="expiryMonth"
                              value={paymentInfo.expiryMonth}
                              onChange={handlePaymentChange as any}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Month</option>
                              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month.toString().padStart(2, "0")}>
                                  {month.toString().padStart(2, "0")}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiryYear">Expiry Year</Label>
                            <select
                              id="expiryYear"
                              name="expiryYear"
                              value={paymentInfo.expiryYear}
                              onChange={handlePaymentChange as any}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Year</option>
                              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                <option key={year} value={year.toString()}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              value={paymentInfo.cvv}
                              onChange={handlePaymentChange}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep("shipping")}>
                        Back
                      </Button>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Continue to Review
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {currentStep === "review" && (
                <div className="rounded-lg border bg-white p-6">
                  <h2 className="text-xl font-bold mb-4">Review Your Order</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg">Shipping Information</h3>
                      <div className="mt-2 text-gray-600">
                        <p>
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                        </p>
                        <p>{shippingInfo.email}</p>
                        <p>{shippingInfo.phone}</p>
                      </div>
                      <Button
                        variant="link"
                        className="mt-2 p-0 h-auto text-blue-600"
                        onClick={() => setCurrentStep("shipping")}
                      >
                        Edit
                      </Button>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-lg">Payment Information</h3>
                      <div className="mt-2 text-gray-600">
                        <p>
                          {paymentInfo.paymentMethod === "credit-card"
                            ? "Credit Card"
                            : paymentInfo.paymentMethod === "paypal"
                              ? "PayPal"
                              : "Apple Pay"}
                        </p>
                        {paymentInfo.paymentMethod === "credit-card" && (
                          <>
                            <p>{paymentInfo.cardName}</p>
                            <p>**** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
                            <p>
                              Expires: {paymentInfo.expiryMonth}/{paymentInfo.expiryYear}
                            </p>
                          </>
                        )}
                      </div>
                      <Button
                        variant="link"
                        className="mt-2 p-0 h-auto text-blue-600"
                        onClick={() => setCurrentStep("payment")}
                      >
                        Edit
                      </Button>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-bold text-lg">Order Items</h3>
                      <div className="mt-4 space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleReviewSubmit} className="mt-6">
                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep("payment")}>
                          Back
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Place Order
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === "confirmation" ? (
            <div className="lg:col-span-3">
              <div className="rounded-lg border bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold">Order Confirmed!</h2>
                <p className="mt-2 text-gray-600">
                  Thank you for your order. We've received your payment and will process your order shortly.
                </p>
                <p className="mt-1 text-gray-600">A confirmation email has been sent to {shippingInfo.email}.</p>
                <div className="mt-8 space-y-2">
                  <p className="font-medium">Order Number: #ORD-{Math.floor(Math.random() * 10000)}</p>
                  <p className="text-gray-600">
                    Estimated Delivery: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/products">
                    <Button className="bg-blue-600 hover:bg-blue-700">Continue Shopping</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-white p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="max-h-64 overflow-auto space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-2" />
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
