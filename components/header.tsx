"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { itemCount } = useCart()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/triease.jpg-1cVXBv04yaovZWpNT4NSmY0aqgQsSU.jpeg"
              alt="TriEase Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                pathname === route.path ? "text-teal-600" : "text-gray-600"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-teal-500">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/account">
            <Button className="bg-teal-600 hover:bg-teal-700">My Account</Button>
          </Link>
        </div>

        {/* Mobile Cart Button */}
        <div className="flex md:hidden">
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-teal-500">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4 px-4 md:px-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  pathname === route.path ? "text-teal-600" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <Link href="/account" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">
                  My Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
