import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Say goodbye to stress, anywhere. Anytime.
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  The smart head, wrist & leg massager designed for your lifestyle.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-black border-green hover:bg-teal-60">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-10 md:py-24 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center ">
            <div className="space-y-1 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Why Choose TriEase?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our 3-in-1 smart massager provides targeted relief exactly where you need it.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">5-Hour Battery Life</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Long-lasting power for extended use throughout your day.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">WiFi App Control</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize your massage experience from your smartphone.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI-Powered Adjustments</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Smart pressure sensing adjusts to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="w-full py-12 md:py-24 lg:py-10 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Technology</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                TriEase combines cutting-edge technology with comfort and convenience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold">Smart Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Real-Time Biofeedback for personalized massage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Wireless Charging for convenient power-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Water Resistant design for use anywhere</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Music & wellness tracking to relax your mind</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/features">
                  <Button className="bg-teal-600 hover:bg-teal-700">Explore All Features</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20at%2016.43.12_31be5bc6.jpg-CO2l6sMwSVBfO7KaGlRdurcnVwBfTd.jpeg"
                alt="TriEase Technology"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="w-full py-12 md:py-24 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our range of smart massager for different body parts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/TriEase -White Band">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="white band.jpg"
                    alt="TriEase -White Band"
                    width={400}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">TriEase -White Band</h3>
                  <p className="text-sm text-gray-500">Enhanced head and temple massage for deep relaxation</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(15 reviews)</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">$39.99</span>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/wrist-band">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="black band.jpg"
                    alt="TriEase -Black Band"
                    width={400}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">TriEase -Black Band</h3>
                  <p className="text-sm text-gray-500">Precision-targeted therapy for wrist and palm tension relief</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(15 reviews)</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">$38.99</span>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/products/leg-band">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="brown band.jpg"
                    alt="TriEase -Brown Band"
                    width={400}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">TriEase -Brown Band</h3>
                  <p className="text-sm text-gray-500">Ergonomic comfort and vibration for calf and leg relaxation</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(15 reviews)</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">$37.99</span>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Control Your Experience</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  The TriEase app gives you complete control over your massage experience. Adjust intensity, select
                  massage modes, and track your wellness journey.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Customize massage intensity and patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Track your wellness metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Access guided relaxation sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Set schedules and reminders</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Download for iOS
                </Button>
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/app.jpg"
                alt="TriEase App"
                width={500}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the perfect TriEase App package for your needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3 ">
            <div className="flex flex-col rounded-lg border bg-white shadow-sm ">
              <div className="p-6">
                <h3 className="text-xl font-bold">TriEase Basic</h3>
                <div className="mt-4 text-3xl font-bold">FREE</div>
                <p className="mt-2 text-gray-500">Choose one band for targeted relief</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>App Control</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Basic vibration mode(standard on/off pattern) </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Manual intensity control(Low,Medium,High)</span>
                  </li>
                  
                </ul>
                
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-teal-50 shadow-sm relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                Popular
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-bold">TriEase Plus</h3>
                <div className="mt-4 text-3xl font-bold">$4.99/monthly</div>
                <p className="mt-2 text-gray-500">Upgrade your experience with more control and comfort</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Adjustable intensity slider (smooth range control)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Access to calming background music syned with vibration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Scheduled massage sessions(set timers for auto-start/stop)</span>
                  </li>
                  
                </ul>
               
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold">TriEase Premium</h3>
                <div className="mt-4 text-3xl font-bold">$14.99/monthly</div>
                <p className="mt-2 text-gray-500">The full 3-in-1 experience for ultimate relief and relaxation</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Everything in Plus</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Immersive Serenity Mode</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Access to relaxation games </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Guided wellness stories & meditations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                    <span>Priority feature access & early content releases</span>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Hear from people who have experienced relief with TriEase.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "I've struggled with migraines for years. The TriEase head band has been a game-changer for me. I use it
                daily and the relief is almost immediate."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "As someone who types all day, wrist pain was becoming a serious issue. The TriEase wrist band has
                helped reduce my discomfort significantly."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium">Michael Chen</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "After long runs, my calves would be so tight. Using the TriEase leg band has become an essential part
                of my recovery routine."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium">Jessica Williams</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for Relief?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers who have found relief with TriEase.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-black border-green hover:bg-teal-60">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}