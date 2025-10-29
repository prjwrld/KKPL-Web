"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Users, Calendar, Ticket, MapPin, Clock, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  // Hero Section
  const HeroSection = () => (
    <div className="relative h-[5vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Kabaddi Tournament"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">KARNATAKA KABADDI PREMIER LEAGUE</h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8">Experience the thrill of Kabaddi with the most exciting teams from across Karnataka</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">View Schedule</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">Our Teams</Button>
        </div>
      </div>
    </div>
  );

  const [currentSlide, setCurrentSlide] = useState(0)
  const [scheduleSlide, setScheduleSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [cardsPerSlide, setCardsPerSlide] = useState(1)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const teams = [
    {
      name: "Bangalore Royals",
      image: "https://static.wixstatic.com/media/0dd563_af21a59b551f412994e972b70a1715f9~mv2.jpeg",
    },
    {
      name: "Davangere Lions",
      image: "https://static.wixstatic.com/media/0dd563_fc9f5b6108cf4773b3da6de7d5dca454~mv2.jpeg",
    },
    {
      name: "Hubli Eagles",
      image: "https://static.wixstatic.com/media/0dd563_9ebf9975514a4b6e90bd08fb54f2ec75~mv2.jpeg",
    },
    {
      name: "Mysore Kings",
      image: "https://static.wixstatic.com/media/0dd563_972e6f640f824e7ebdef41504966c92a~mv2.jpeg",
    },
    {
      name: "Belgaum Bulls",
      image: "https://static.wixstatic.com/media/0dd563_f32f1b07fe06429fa3fece8bdbfc2a23~mv2.jpeg",
    },
    {
      name: "Shimoga Tigers",
      image: "https://static.wixstatic.com/media/0dd563_30824fa229814b02b6339507e0316358~mv2.jpeg",
    },
    {
      name: "Kolar Warriors",
      image: "https://static.wixstatic.com/media/0dd563_cc26d35284334d8b9e6a30224210e314~mv2.jpeg",
    },
    {
      name: "Bagalkote Cheetahs",
      image: "https://static.wixstatic.com/media/0dd563_79a468fd29584056872b0b781c71246e~mv2.jpeg",
    },
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2) // Tablet: 2 cards
      } else {
        setCardsPerSlide(4) // Desktop: 4 cards
      }
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const totalSlides = Math.ceil(teams.length / cardsPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(tournamentStages.length))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tournamentStages.length) % tournamentStages.length)
  }

  const nextScheduleSlide = () => {
    setScheduleSlide((prev) => (prev + 1) % Math.ceil(tournamentStats.length / 2))
  }

  const prevScheduleSlide = () => {
    setScheduleSlide((prev) => (prev - 1 + Math.ceil(tournamentStats.length / 2)) % Math.ceil(tournamentStats.length / 2))
  }

  const tournamentStages = [
    { id: 1, title: "8 Teams", icon: Users, description: "Competing for glory" },
    { id: 2, title: "3 Venues", icon: MapPin, description: "Across Karnataka" },
    { id: 3, title: "32 Matches", icon: Trophy, description: "Throughout the season" },
    { id: 4, title: "1 Title Winner", icon: Award, description: "The ultimate champion" },
  ]

  const tournamentStats = [
    { title: "10 Days", subtitle: "Tournament Duration", icon: Calendar },
    { title: "32 Matches", subtitle: "Across All Teams", icon: Trophy },
    { title: "3–4 Matches/Day", subtitle: "Daily Showdowns", icon: Clock },
    { title: "45 Minutes", subtitle: "Each Match Duration", icon: Clock },
    { title: "3 Locations", subtitle: "Across Karnataka", icon: MapPin },
  ]

  const sponsors = [
    "https://static.wixstatic.com/media/0dd563_02234768b7b441eaae9a08821581f820~mv2.png",
    "https://static.wixstatic.com/media/0dd563_0f51aed568bf45bca778cea60e7c7fd3~mv2.png",
    "https://static.wixstatic.com/media/0dd563_a57f7a08c5e1454b88cf9e6cfe890595~mv2.png",
    "https://static.wixstatic.com/media/0dd563_212d965c8de54ed1883f077de5502b03~mv2.png",
    "https://static.wixstatic.com/media/0dd563_3d40154e318a45328a72ef0c7f16c2ad~mv2.png",
    "https://static.wixstatic.com/media/0dd563_5a2a078ddf93416785b6be2507ccbcf9~mv2.png",
    "https://static.wixstatic.com/media/0dd563_2639aec7b1e74a83a12146438fd4a70f~mv2.png",
    "https://static.wixstatic.com/media/0dd563_22584358a121418f86a3cb8f983cf16f~mv2.png",
    "https://static.wixstatic.com/media/0dd563_c1e5e6c069b94dba9ddad9d021cdde86~mv2.png",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue/90 z-10 opacity-[0.88]"></div>
          <Image
            src="https://static.wixstatic.com/media/0dd563_6acc7fd586f14f7f84044e3d30b28514~mv2.jpeg"
            alt="KKPL Coming Soon - Kabaddi players in action"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            style={{
              objectPosition: "center",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">KKPL – Karnataka Kabaddi Pro League</h1>
            <p className="text-2xl md:text-3xl mb-8 text-secondary font-semibold">Where Strength Meets Spirit</p>
            <Link href="/news-events">
              <Button
                size="lg"
                className="bg-secondary text-black hover:bg-secondary/90 text-xl px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 transform"
              >
                Register Your Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Karnataka Kabaddi Pro League
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto text-justify hyphens-auto">
              Kabaddi is a traditional Indian rural sport, and the Karnataka Kabaddi Pro League (KKPL) is the vision of
              Dr. C. Honnappa Gowda. The league was created to provide a platform for talented players from humble
              backgrounds across Karnataka. Many families focus on seeing their children become doctors or engineers,
              often overlooking the true value and pride of being a sportsperson. The purpose of KKPL is to offer real
              opportunities and support to gifted and aspiring kabaddi players, helping them begin their careers in
              sports and realize their full potential as true professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-base text-foreground leading-relaxed max-w-md mx-auto text-justify hyphens-auto">
                To ignite the spirit of Kabaddi in every corner of Karnataka — empowering the youth to dream big, play
                bold, and rise as champions with pride and passion.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-base text-foreground leading-relaxed max-w-md mx-auto text-justify hyphens-auto">
                To create a powerful platform where young and talented Kabaddi players can showcase their skills, chase
                their dreams, and turn their passion into a profession. KKPL is committed to celebrating the energy,
                strength, and unity of the game — building a new generation of fearless athletes who carry the legacy of
                Kabaddi forward with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Players Section / Join the League */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Join the League</h2>
            <p className="text-xl text-foreground mb-8 text-justify max-w-3xl mx-auto">
              Are you ready to compete at the highest level? Register your team now and be part of Karnataka's most
              exciting kabaddi championship. Limited spots available.
            </p>
          </div>

          <div className="relative mb-12">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-primary hover:text-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 -ml-4"
              aria-label="Previous teams"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-primary hover:text-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 -mr-4"
              aria-label="Next teams"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-600 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div
                      className={`grid grid-cols-1 ${cardsPerSlide >= 2 ? "md:grid-cols-2" : ""} ${cardsPerSlide >= 4 ? "lg:grid-cols-4" : ""} gap-8`}
                    >
                      {teams.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((team) => (
                        <Card
                          key={team.name}
                          className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-xl shadow-md"
                        >
                          <CardContent className="p-0">
                            <div className="relative w-full h-48">
                              <Image
                                src={team.image || "/placeholder.svg"}
                                alt={`${team.name} kabaddi team`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 bg-white">
                              <h3 className="text-xl font-bold text-primary mb-2">{team.name}</h3>
                              <p className="text-muted-foreground">Professional kabaddi team ready for competition</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => setCurrentSlide(slideIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === slideIndex
                      ? "bg-primary shadow-md"
                      : "bg-gray-300 border-2 border-primary/30 hover:bg-primary/20"
                  }`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/news-events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 text-xl px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Tournament Format</h2>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {tournamentStages.map((stage, index) => (
              <Card key={stage.id} className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stage.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden max-w-md mx-auto">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={() => {
                if (touchStart - touchEnd > 50) {
                  nextSlide();
                }
                if (touchStart - touchEnd < -50) {
                  prevSlide();
                }
              }}
            >
              {tournamentStages.map((stage) => (
                <div key={stage.id} className="w-full flex-shrink-0 px-4">
                  <Card className="text-center p-8 bg-white rounded-xl shadow-md border-0">
                    <CardContent className="p-0">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <stage.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{stage.title}</h3>
                      <p className="text-muted-foreground text-sm">{stage.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {tournamentStages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Schedule */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Tournament Schedule</h2>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {tournamentStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-0"
              >
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden max-w-md mx-auto">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scheduleSlide * 100}%)` }}
              onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={() => {
                if (touchStart - touchEnd > 50) {
                  nextScheduleSlide();
                }
                if (touchStart - touchEnd < -50) {
                  setScheduleSlide(prev => Math.max(0, prev - 1));
                }
              }}
            >
              {Array.from({ length: Math.ceil(tournamentStats.length / 2) }).map((_, groupIndex) => {
                const isLastGroup = groupIndex === Math.ceil(tournamentStats.length / 2) - 1;
                const isOddCount = tournamentStats.length % 2 !== 0;
                const items = tournamentStats.slice(groupIndex * 2, groupIndex * 2 + 2);
                
                return (
                  <div key={groupIndex} className="w-full flex-shrink-0 px-2">
                    <div className={`grid ${isLastGroup && isOddCount ? 'grid-cols-1 max-w-[200px] mx-auto' : 'grid-cols-2'} gap-4`}>
                      {items.map((stat, index) => (
                        <Card 
                          key={groupIndex * 2 + index}
                          className="text-center p-6 bg-white rounded-xl shadow-md border-0"
                        >
                          <CardContent className="p-0">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                              <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{stat.title}</h3>
                            <p className="text-muted-foreground text-xs">{stat.subtitle}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(tournamentStats.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setScheduleSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${scheduleSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Live Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
              <Ticket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Experience Live Action</h2>
            <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto text-justify">
              Feel the energy, hear the crowd, and witness kabaddi at its finest. Secure your seats now for an
              unforgettable sporting experience.
            </p>
            <Link href="/news-events">
              <Button className="bg-secondary text-black hover:bg-secondary/90 font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Buy Tickets Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Partners & Sponsors</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
              Proud to be supported by leading organizations who believe in promoting sports excellence.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll">
              {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor}-${index}`}
                  className="flex-shrink-0 w-56 h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={sponsor || "/placeholder.svg"}
                    alt="Sponsor logo"
                    width={160}
                    height={80}
                    className="object-contain h-5/6 w-5/6 p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
