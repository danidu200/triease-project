import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About ReliefBand</h1>
          <p className="text-gray-500 md:text-xl">
            We're on a mission to help people find relief from muscle pain and discomfort.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src="/prototype.jpg"
            alt="Our Team"
            width={800}
            height={400}
            className="w-full object-cover"
          />
          
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            ReliefBand was founded in 2025 by a team of Business student and software engineers who saw a need for effective,
            affordable muscle relief solutions that people could use at home. After few months of working with Softwares
            suffering from chronic pain and muscle tension, our founders developed the first prototype of our massage
            bands.
          </p>
          <p className="text-gray-600">
            What started as a small operation has grown into a company dedicated to helping thousands of people find
            relief from muscle pain in their legs, hands, and knees. Our products are designed with care, tested
            rigorously, and continuously improved based on customer feedback.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-600">
            At ReliefBand, our mission is simple: to provide effective, accessible relief for muscle pain and tension.
            We believe that everyone deserves to live without the limitations of muscle discomfort, and we're committed
            to creating products that make that possible.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and manufacturing processes to ensure our products are
                effective and durable.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-600">
                We're constantly researching and developing new ways to provide better relief for our customers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-gray-600">
                We believe effective pain relief should be available to everyone, regardless of budget or location.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers' needs and feedback drive everything we do, from product development to customer service.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-600">
                We're honest about what our products can do and transparent about how they work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-gray-600">
                We support the communities we serve through charitable giving and education about muscle health.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/team/ramika.jpg"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ramika Dalpathadu</h3>
              <p className="text-gray-500">Team Lead, Developer, UI/UX Designer</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/team/danidu01.jpg"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Danidu Pandithage</h3>
              <p className="text-gray-500">Lead Developer,UI/UX Designer</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/team/daksha.jpg"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Daksha Sumanadas</h3>
              <p className="text-gray-500">Software Engineer,UI/UX Designer </p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/team/asra.jpg"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Fathima Asra </h3>
              <p className="text-gray-500">Business Analysis,UI/UX Designer</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-6">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Join Our Mission</h2>
            <p className="text-gray-600">
              We're always looking for passionate people to join our team. Check out our current openings or reach out
              to learn more.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/careers">
                <Button>View Careers</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
