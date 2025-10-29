"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 80 2234 5678", "+91 80 2234 5679"],
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@kkpl.in", "support@kkpl.in"],
      description: "Send us your queries anytime",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["KKPL Headquarters", "Sports Complex, Bengaluru", "Karnataka - 560001"],
      description: "Visit our main office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      description: "We are here to help",
    },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/kkpl",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/kkpl",
      color: "hover:text-pink-600",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/kkpl",
      color: "hover:text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-blue/90 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/0dd563_506ae6b258944dd48e003b739852d24a~mv2.png"
            alt="KKPL contact and support center"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-secondary mb-8">Get in touch with the KKPL team - we're here to help</p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-4">Send us a Message</CardTitle>
                  <p className="text-foreground">
                    Have questions about KKPL? We'd love to hear from you. Fill out the form below and we'll get back to
                    you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-semibold">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="font-semibold">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter message subject"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message here..."
                        rows={6}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-3 font-bold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  Whether you're a team looking to register, a fan wanting to buy tickets, or a sponsor interested in
                  partnering with us, we're here to help. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-foreground font-semibold">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Media Links */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
                  <p className="text-foreground mb-6">
                    Stay connected with KKPL on social media for the latest updates, match highlights, and
                    behind-the-scenes content.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-gray-100 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 ${social.color}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 bg-gradient-to-r from-blue/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Find Us</h2>
            <p className="text-xl text-foreground">Visit our headquarters in the heart of Bengaluru</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">KKPL Headquarters</h3>
                <p className="text-foreground">Sports Complex, Bengaluru, Karnataka - 560001</p>
                <p className="text-gray-600 text-sm mt-2">Interactive map integration would be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-foreground">Quick answers to common questions about KKPL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I register my team for KKPL?",
                answer:
                  "Team registration is available through our News & Events page. Select your preferred team slot and complete the registration form along with the payment process.",
              },
              {
                question: "What are the ticket prices for matches?",
                answer:
                  "Ticket prices vary by venue: Bengaluru (₹200), Mysuru (₹150), and Mangaluru (₹150). You can book tickets through our website.",
              },
              {
                question: "When does the tournament season start?",
                answer:
                  "The KKPL season typically runs from December to February. Check our schedule section for exact dates and match timings.",
              },
              {
                question: "Can I sponsor or partner with KKPL?",
                answer:
                  "Yes! We welcome sponsors and partners. Please contact us directly to discuss partnership opportunities and sponsorship packages.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
