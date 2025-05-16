import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 md:text-xl">Choose the perfect TriEase package for your wellness needs.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="flex flex-col rounded-lg border bg-white shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-bold">TriEase Basic</h2>
              <div className="mt-4 text-3xl font-bold">FREE</div>
              <p className="mt-2 text-gray-500">Essential access to TriEase smart therapy </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>App Control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Basic vibration mode(standard on/off pattern)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Manual intensity control (Low,Medium,High)</span>
                </li>
                
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500">No advanced moods or audio integration</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500">No access to relaxating content or immersive features</span>
                </li>
                
              </ul>
              <Button className="mt-6 w-full bg-teal-600 hover:bg-teal-700">Buy Now</Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-lg border bg-teal-50 shadow-sm relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
              Popular
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">TriEase Plus/monthly</h2>
              <div className="mt-4 text-3xl font-bold">$4.99</div>
              <p className="mt-2 text-gray-500">Enhanced experience with extended comfort</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Adjustable intensity slider (smooth range control)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Access to calming background music synced with vibration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>scheduled massage sessions (set times for auto-start/stop)</span>
                </li>
                
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500">Immersive serenity, stories or games not included</span>
                </li>
                
              </ul>
              <Button className="mt-6 w-full bg-teal-600 hover:bg-teal-700">Buy Now</Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col rounded-lg border bg-white shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-bold">TriEase Premium/monthly</h2>
              <div className="mt-4 text-3xl font-bold">$14.99</div>
              <p className="mt-2 text-gray-500">The full smart wellness experience </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Everything in plus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Immersive Serenity Mode</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Access to wellness stories & meditations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Priority feature access & early content releases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Premium charging station</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Travel case included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Lifetime app updates</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-teal-600 hover:bg-teal-700">Buy Now</Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-bold">Do you offer international shipping?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                location.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-bold">What's your return policy?</h3>
              <p className="mt-2 text-gray-600">
                We offer a 30-day satisfaction guarantee. If you're not completely satisfied, you can return your
                TriEase for a full refund.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-bold">How long does shipping take?</h3>
              <p className="mt-2 text-gray-600">
                Domestic orders typically arrive within 3-5 business days. International orders may take 7-14 business
                days depending on location.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-bold">Can I upgrade my plan later?</h3>
              <p className="mt-2 text-gray-600">
                Yes, you can upgrade your TriEase package at any time. Contact our customer service team for assistance
                with upgrades.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-teal-50 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to experience relief?</h2>
          <p className="mt-2 text-gray-600">
            Join thousands of satisfied customers who have found relief with TriEase.
          </p>
          <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Shop Now</Button>
        </div>
      </div>
    </div>
  )
}
