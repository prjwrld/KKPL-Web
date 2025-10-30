"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Users, MapPin, Calendar, QrCode } from "lucide-react"
import Image from "next/image"

export default function NewsEventsPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto slide effect for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const slideInterval = setInterval(() => {
      setCurrentTeamSlide(prev => (prev + 1) % teams.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(slideInterval);
  }, [isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextTeamSlide = () => {
    setCurrentTeamSlide(prev => (prev + 1) % teams.length)
  }

  const prevTeamSlide = () => {
    setCurrentTeamSlide(prev => (prev - 1 + teams.length) % teams.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextTeamSlide()
    }
    if (touchStart - touchEnd < -50) {
      prevTeamSlide()
    }
  }

  const [teamFormData, setTeamFormData] = useState({
    teamName: "",
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    playersCount: "",
    experience: "",
  })
  const [ticketFormData, setTicketFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketCount: "",
    matchDate: "",
  })

  const teams = [
    {
      id: 1,
      name: "Bangalore Royals",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_af21a59b551f412994e972b70a1715f9~mv2.jpeg",
      gradient: "linear-gradient(135deg, #ffd700 0%, #6a1b9a 100%)"
    },
    {
      id: 2,
      name: "Davangere Lions",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_fc9f5b6108cf4773b3da6de7d5dca454~mv2.jpeg",
      gradient: "linear-gradient(135deg, #ff9800 0%, #ffffff 100%)"
    },
    {
      id: 3,
      name: "Hubli Eagles",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_9ebf9975514a4b6e90bd08fb54f2ec75~mv2.jpeg",
      gradient: "linear-gradient(135deg, #d32f2f 0%, #ffffff 100%)"
    },
    {
      id: 4,
      name: "Mysore Kings",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_972e6f640f824e7ebdef41504966c92a~mv2.jpeg",
      gradient: "linear-gradient(135deg, #6a1b9a 0%, #ffeb3b 100%)"
    },
    {
      id: 5,
      name: "Belgaum Bulls",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_f32f1b07fe06429fa3fece8bdbfc2a23~mv2.jpeg",
      gradient: "linear-gradient(135deg, #d32f2f 0%, #81d4fa 100%)"
    },
    {
      id: 6,
      name: "Shimoga Tigers",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_30824fa229814b02b6339507e0316358~mv2.jpeg",
      gradient: "linear-gradient(135deg, #ff9800 0%, #c8e6c9 100%)"
    },
    {
      id: 7,
      name: "Kolar Warriors",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_cc26d35284334d8b9e6a30224210e314~mv2.jpeg",
      gradient: "linear-gradient(135deg, #2e7d32 0%, #ffffff 100%)"
    },
    {
      id: 8,
      name: "Bagalkote Cheetahs",
      status: "Available",
      registrationFee: "₹5,000",
      logo: "https://static.wixstatic.com/media/0dd563_79a468fd29584056872b0b781c71246e~mv2.jpeg",
      gradient: "linear-gradient(135deg, #6a1b9a 0%, #ff8f00 100%)"
    }
  ]

  const venues = [
    {
      name: "Bengaluru",
      location: "Kanteerava Stadium",
      capacity: "15,000",
      ticketPrice: "₹200",
    },
    {
      name: "Mysuru",
      location: "Chamundi Vihar Stadium",
      capacity: "12,000",
      ticketPrice: "₹150",
    },
    {
      name: "Mangaluru",
      location: "Nehru Maidan",
      capacity: "10,000",
      ticketPrice: "₹150",
    },
  ]

  const handleTeamFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Team registration:", teamFormData)
  }

  const handleTicketFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Ticket booking:", ticketFormData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-blue/90 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/0dd563_7719d230bbd2465cba03d66b5744f096~mv2.png"
            alt="Kabaddi tournament registration and events"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">News & Events</h1>
          <p className="text-xl text-white mb-8">
            Register your team or book tickets to witness the most exciting kabaddi action in Karnataka
          </p>
        </div>
      </section>

      {/* Team Registration Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Team Registration</h2>
            <p className="text-xl text-foreground">Join the elite competition! Select your team slot and complete the registration process</p>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <Dialog key={`desktop-${team.id}`}>
                <DialogTrigger asChild>
                  <Card
                    className="relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white"
                    style={{ background: team.gradient }}
                  >
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                    <CardContent className="relative z-10 p-6 text-center">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <Image
                          src={team.logo}
                          alt={`${team.name} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                      <p className="text-white/80 mb-2">Status: {team.status}</p>
                      <p className="text-white font-semibold">{team.registrationFee}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary">Register for {team.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <form onSubmit={handleTeamFormSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="teamName">Team Name</Label>
                          <Input
                            id="teamName"
                            value={teamFormData.teamName}
                            onChange={(e) => setTeamFormData({ ...teamFormData, teamName: e.target.value })}
                            placeholder="Enter your team name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="captainName">Captain Name</Label>
                          <Input
                            id="captainName"
                            value={teamFormData.captainName}
                            onChange={(e) => setTeamFormData({ ...teamFormData, captainName: e.target.value })}
                            placeholder="Enter captain's name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="captainEmail">Captain Email</Label>
                          <Input
                            id="captainEmail"
                            type="email"
                            value={teamFormData.captainEmail}
                            onChange={(e) => setTeamFormData({ ...teamFormData, captainEmail: e.target.value })}
                            placeholder="Enter captain's email"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="captainPhone">Captain Phone</Label>
                          <Input
                            id="captainPhone"
                            value={teamFormData.captainPhone}
                            onChange={(e) => setTeamFormData({ ...teamFormData, captainPhone: e.target.value })}
                            placeholder="Enter captain's phone"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="playersCount">Number of Players</Label>
                          <Input
                            id="playersCount"
                            type="number"
                            value={teamFormData.playersCount}
                            onChange={(e) => setTeamFormData({ ...teamFormData, playersCount: e.target.value })}
                            placeholder="Enter number of players"
                            min="7"
                            max="12"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience">Team Experience</Label>
                          <Textarea
                            id="experience"
                            value={teamFormData.experience}
                            onChange={(e) => setTeamFormData({ ...teamFormData, experience: e.target.value })}
                            placeholder="Describe your team's experience"
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
                          Register Team
                        </Button>
                      </form>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                      <QrCode className="w-32 h-32 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-primary mb-2">Payment Details</h3>
                      <p className="text-foreground text-center mb-4">Registration Fee: {team.registrationFee}</p>
                      <p className="text-sm text-gray-600 text-center">Scan QR code or use UPI ID: kkpl@upi</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden mt-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {teams.map((team) => (
                <div key={`mobile-${team.id}`} className="w-full flex-shrink-0 px-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card
                        className="relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white"
                        style={{ background: team.gradient }}
                      >
                        <div className="absolute inset-0 bg-white/15 backdrop-blur-md" />
                        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                        <CardContent className="relative z-10 p-6 text-center">
                          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                            <Image
                              src={team.logo}
                              alt={`${team.name} logo`}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                          <p className="text-white/80 mb-2">Status: {team.status}</p>
                          <p className="text-white font-semibold">{team.registrationFee}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-primary">Register for {team.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <form onSubmit={handleTeamFormSubmit} className="space-y-4">
                            <div>
                              <Label htmlFor="teamName">Team Name</Label>
                              <Input
                                id="teamName"
                                value={teamFormData.teamName}
                                onChange={(e) => setTeamFormData({ ...teamFormData, teamName: e.target.value })}
                                placeholder="Enter your team name"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="captainName">Captain Name</Label>
                              <Input
                                id="captainName"
                                value={teamFormData.captainName}
                                onChange={(e) => setTeamFormData({ ...teamFormData, captainName: e.target.value })}
                                placeholder="Enter captain's name"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="captainEmail">Captain Email</Label>
                              <Input
                                id="captainEmail"
                                type="email"
                                value={teamFormData.captainEmail}
                                onChange={(e) => setTeamFormData({ ...teamFormData, captainEmail: e.target.value })}
                                placeholder="Enter captain's email"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="captainPhone">Captain Phone</Label>
                              <Input
                                id="captainPhone"
                                value={teamFormData.captainPhone}
                                onChange={(e) => setTeamFormData({ ...teamFormData, captainPhone: e.target.value })}
                                placeholder="Enter captain's phone"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="playersCount">Number of Players</Label>
                              <Input
                                id="playersCount"
                                type="number"
                                value={teamFormData.playersCount}
                                onChange={(e) => setTeamFormData({ ...teamFormData, playersCount: e.target.value })}
                                placeholder="Enter number of players"
                                min="7"
                                max="12"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="experience">Team Experience</Label>
                              <Textarea
                                id="experience"
                                value={teamFormData.experience}
                                onChange={(e) => setTeamFormData({ ...teamFormData, experience: e.target.value })}
                                placeholder="Describe your team's experience"
                                rows={3}
                              />
                            </div>
                            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
                              Register Team
                            </Button>
                          </form>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                          <QrCode className="w-32 h-32 text-primary mb-4" />
                          <h3 className="text-lg font-bold text-primary mb-2">Payment Details</h3>
                          <p className="text-foreground text-center mb-4">Registration Fee: {team.registrationFee}</p>
                          <p className="text-sm text-gray-600 text-center">Scan QR code or use UPI ID: kkpl@upi</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevTeamSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Previous team"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button 
              onClick={nextTeamSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Next team"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {teams.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentTeamSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to team ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Booking Section */}
      <section className="py-20 bg-gradient-to-r from-blue/10 to-secondary/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Buy Tickets to Witness the Real Game</h2>
            <p className="text-xl text-foreground">Experience the thrill of live kabaddi action at these premier venues across Karnataka</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <Dialog key={venue.name}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue">
                    <CardContent className="p-0">
                      <div className="relative w-full h-48">
                        <Image
                          src="/images/design-mode/0dd563_6b447a7a15444a0089bf54916ba2b588~mv2.png"
                          alt={`${venue.name} stadium for kabaddi matches`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <MapPin className="w-5 h-5 text-primary mr-2" />
                          <h3 className="text-xl font-bold text-primary">{venue.name}</h3>
                        </div>
                        <p className="text-foreground mb-2">{venue.location}</p>
                        <p className="text-gray-600 mb-4">Capacity: {venue.capacity}</p>
                        <p className="text-blue font-semibold text-lg">{venue.ticketPrice}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary">Book Tickets for {venue.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <form onSubmit={handleTicketFormSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="ticketName">Full Name</Label>
                          <Input
                            id="ticketName"
                            value={ticketFormData.name}
                            onChange={(e) => setTicketFormData({ ...ticketFormData, name: e.target.value })}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="ticketEmail">Email</Label>
                          <Input
                            id="ticketEmail"
                            type="email"
                            value={ticketFormData.email}
                            onChange={(e) => setTicketFormData({ ...ticketFormData, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="ticketPhone">Phone</Label>
                          <Input
                            id="ticketPhone"
                            value={ticketFormData.phone}
                            onChange={(e) => setTicketFormData({ ...ticketFormData, phone: e.target.value })}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="ticketCount">Number of Tickets</Label>
                          <Input
                            id="ticketCount"
                            type="number"
                            value={ticketFormData.ticketCount}
                            onChange={(e) => setTicketFormData({ ...ticketFormData, ticketCount: e.target.value })}
                            placeholder="Enter number of tickets"
                            min="1"
                            max="10"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="matchDate">Preferred Match Date</Label>
                          <Input
                            id="matchDate"
                            type="date"
                            value={ticketFormData.matchDate}
                            onChange={(e) => setTicketFormData({ ...ticketFormData, matchDate: e.target.value })}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue text-white hover:bg-blue/90 font-bold">
                          Book Tickets
                        </Button>
                      </form>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                      <QrCode className="w-32 h-32 text-blue mb-4" />
                      <h3 className="text-lg font-bold text-primary mb-2">Payment Details</h3>
                      <p className="text-foreground text-center mb-2">Ticket Price: {venue.ticketPrice}</p>
                      <p className="text-foreground text-center mb-4">Venue: {venue.location}</p>
                      <p className="text-sm text-gray-600 text-center">Scan QR code or use UPI ID: kkpl-tickets@upi</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Latest News & Updates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/design-mode/0dd563_a4914e4e309a4e4684446f3eea0700c9~mv2.png"
                      alt={`KKPL news update ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm text-gray-600">December {10 + index}, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">KKPL 2025 Registration Opens</h3>
                    <p className="text-foreground mb-4">
                      Teams can now register for the upcoming Karnataka Kabaddi Pro League season.
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white font-bold bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
