import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/triease.jpg-1cVXBv04yaovZWpNT4NSmY0aqgQsSU.jpeg"
                alt="TriEase Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500">Smart head, wrist & leg massagers designed for your lifestyle.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-teal-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/team.reviora?igsh=MzQ4OTA5cWhremJo" className="text-gray-500 hover:text-teal-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/reviora-team-40147235a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-teal-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/head-band" className="text-sm text-gray-500 hover:text-teal-600">
                  Head Massage Band
                </Link>
              </li>
              <li>
                <Link href="/products/wrist-band" className="text-sm text-gray-500 hover:text-teal-600">
                  Wrist Massage Band
                </Link>
              </li>
              <li>
                <Link href="/products/leg-band" className="text-sm text-gray-500 hover:text-teal-600">
                  Leg Massage Band
                </Link>
              </li>
              <li>
                <Link href="/products/bundle" className="text-sm text-gray-500 hover:text-teal-600">
                  Complete Bundle
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-teal-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-teal-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-teal-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-500 hover:text-teal-600">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-teal-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-500 hover:text-teal-600">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-500 hover:text-teal-600">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Reviora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
