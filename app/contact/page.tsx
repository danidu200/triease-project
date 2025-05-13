"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-gray-500 md:text-xl">We'd love to hear from you. Get in touch with our team.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="text-gray-600">
                Have questions about our products? Want to place a bulk order? Or just want to say hello? Fill out the
                form and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-gray-600">IIT Business School, 528 R.A.De Mel Mawatha, Colombo 03.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-gray-600">teamreviora@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-gray-600">+94743183344</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 5pm SLST</p>
              <p className="text-gray-600">Saturday: 10am - 2pm SLST</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">How do I use the massage bands?</h3>
                <p className="text-gray-600">
                  Each massage band comes with detailed instructions. Generally, you'll wrap the band around the target
                  area and adjust the tension to your comfort level. For specific instructions, please refer to the user
                  manual included with your purchase.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold">How long should I use the massage band?</h3>
                <p className="text-gray-600">
                  We recommend using the massage band for 10-15 minutes per session, up to 3 times daily. However,
                  listen to your body and adjust usage as needed.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold">Are the massage bands washable?</h3>
                <p className="text-gray-600">
                  Yes, all our massage bands are washable. We recommend hand washing with mild soap and allowing to air
                  dry completely before next use.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
