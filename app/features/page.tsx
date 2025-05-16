import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Battery, Bluetooth, Droplet, Zap, Music, Brain } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">TriEase Features</h1>
          <p className="text-gray-500 md:text-xl">Discover the advanced technology behind our 3-in-1 smart massager.</p>
        </div>

        <div className="grid gap-12">
          {/* Feature 1 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Battery className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">20-Hour Battery Life</h2>
                <p className="text-gray-600">
                  Our advanced lithium-ion battery technology provides up to 20 hours of continuous use on a single
                  charge. Perfect for extended use throughout your day or for multiple days without recharging.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Fast charging - 80% in just 30 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Battery level indicators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Low power consumption design</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/band.jpg"
                alt="Battery Life"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-19%20at%2007.57.30_c67a1d73.jpg-qDU0vdt6tekq74vzYFj7ZT9ipSveuG.jpeg"
                alt="Bluetooth App Control"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Bluetooth className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Bluetooth App Control</h2>
                <p className="text-gray-600">
                  Take full control of your massage experience with our intuitive smartphone app. Adjust intensity,
                  select massage patterns, and customize your experience to your exact preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Seamless Bluetooth 5.0 connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>iOS and Android compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Save custom massage profiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Wireless Charging</h2>
                <p className="text-gray-600">
                  Simply place your TriEase device on the included charging pad for hassle-free wireless charging. No
                  more fumbling with cables or connectors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Qi wireless charging standard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>LED charging indicators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Premium charging dock included with bundles</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2019%2C%202025%2C%2010_28_44%20AM-bQCQNbqUzLznlQ6iPTz1d0oEjLfUl8.png"
                alt="Wireless Charging"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-19%20at%2000.47.57_ede746f8.jpg-g8AOUB9XC3PnkK9JcAO2v3BYzjE9Dc.jpeg"
                alt="Water Resistant"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Droplet className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Water Resistant</h2>
                <p className="text-gray-600">
                  TriEase devices are built to withstand moisture and sweat, making them perfect for use during
                  workouts, after showers, or in any environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>IPX5 water resistance rating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Sweat and splash proof</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Easy to clean surface</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Brain className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">AI-Powered Massage Adjustments</h2>
                <p className="text-gray-600">
                  Our smart pressure sensors and AI algorithms adapt to your body's needs in real-time, providing
                  personalized relief exactly where you need it most.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Smart pressure sensing technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Learns your preferences over time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Adaptive massage patterns</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20at%2016.43.12_31be5bc6.jpg-CO2l6sMwSVBfO7KaGlRdurcnVwBfTd.jpeg"
                alt="AI-Powered Adjustments"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Feature 6 */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-13%20at%2016.43.11_ad9a9876.jpg-5MSV7LGJsyxtoROs9db1CJD3rQPJQ1.jpeg"
                alt="Music & Wellness Tracking"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <Music className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Music & Wellness Tracking</h2>
                <p className="text-gray-600">
                  Enhance your relaxation with synchronized music and comprehensive wellness tracking. Monitor your
                  stress levels, relaxation sessions, and overall wellness journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Curated relaxation playlists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Biometric tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Progress reports and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-teal-50 p-8 text-center">
          <h2 className="text-2xl font-bold">Experience TriEase Today</h2>
          <p className="mt-2 text-gray-600">Ready to transform your wellness routine with cutting-edge technology?</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
