"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingCart, Truck, Star } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  // In a real app, you would fetch this data from an API or database
  const products = {
    "TriEase -White Band": {
      id: "TriEase -White Band",
      name: "TriEase -White Band",
      description: "Enhanced head and temple massage for deep relaxation",
      fullDescription:
        "Our Leg Massage Band is specifically designed to target sore muscles in your legs. The ergonomic design wraps comfortably around calves and thighs, providing deep tissue massage and relief. Made with premium materials, this band is durable, easy to clean, and perfect for post-workout recovery or chronic pain relief.",
      price: 39.99,
      rating: 5,
      reviews: 15,
      image: "white band.jpg",
      features: [
        "Ergonomic design for leg muscles",
        "Adjustable tension for customized pressure",
        "Washable and easy to clean",
        "Portable for use at home or gym",
        "Includes instructional guide",
      ],
    },
    "TriEase -Black Band": {
      id: "TriEase -Black Band",
      name: "TriEase -Black Band",
      description: "Precision-targeted therapy for wrist and palm tension relief",
      fullDescription:
        "The TriEase Massage Band provides targeted relief for hands, wrists, and forearms. Perfect for those who type all day, experience carpal tunnel symptoms, or need recovery after intense hand use. The specialized design allows for self-application and adjustable pressure to meet your specific needs.",
      price: 38.99,
      rating: 5,
      reviews: 15,
      image: "black band.jpg",
      features: [
        "Specialized design for hand and wrist relief",
        "Compact and portable",
        "Self-application design",
        "Gentle materials for sensitive skin",
        "Includes carrying pouch",
      ],
    },
    "TriEase -Brown Band": {
      id: "TriEase -Brown Band",
      name: "TriEase -Brown Band",
      description: "Ergonomic comfort and vibration for calf and leg relaxation",
      fullDescription:
        "Our TriEase Massage Band is engineered to provide relief for knee pain and discomfort. Whether you're recovering from an injury, dealing with arthritis, or experiencing post-workout soreness, this band delivers targeted pressure to alleviate pain and promote healing. The unique design wraps securely around the knee while allowing for movement.",
      price: 37.99,
      rating: 5,
      reviews: 15,
      image: "brown band.jpg",
      features: [
        "Contoured design for knee anatomy",
        "Stays in place during movement",
        "Adjustable compression",
        "Breathable material",
        "Suitable for all knee sizes",
      ],
    },
    
  }

  const product = products[params.id as keyof typeof products] || {
    id: params.id,
    name: "Product Not Found",
    description: "This product does not exist",
    fullDescription: "We couldn't find the product you're looking for. Please check our other products.",
    price: 0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=600&width=600",
    features: [],
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
  }

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
    window.location.href = "/checkout"
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-500">{product.description}</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Quantity</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={decrementQuantity}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Truck className="h-5 w-5" />
            <span>Free shipping on orders over $50</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-gray-600">{product.fullDescription}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
