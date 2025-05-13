import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: "leg-band",
      name: "Leg Massage Band",
      description: "Perfect for calves and thighs",
      price: 29.99,
      rating: 5,
      reviews: 42,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "hand-band",
      name: "Hand Massage Band",
      description: "Ideal for wrists and palms",
      price: 24.99,
      rating: 5,
      reviews: 38,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "knee-band",
      name: "Knee Massage Band",
      description: "Specialized for knee relief",
      price: 34.99,
      rating: 5,
      reviews: 56,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "bundle",
      name: "Complete Relief Bundle",
      description: "Includes all three massage bands",
      price: 79.99,
      rating: 5,
      reviews: 27,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "travel-band",
      name: "Travel Massage Band",
      description: "Compact design for on-the-go relief",
      price: 19.99,
      rating: 4,
      reviews: 18,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "premium-band",
      name: "Premium Massage Band",
      description: "Enhanced design with extra features",
      price: 44.99,
      rating: 5,
      reviews: 31,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Browse our selection of muscle reliever massage bands for targeted relief.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted stroke-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
