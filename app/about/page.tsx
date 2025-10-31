"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Heart, Users, Shield, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useCallback, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

interface Director {
  id: number
  name: string
  designation: string
  photo: string
  bio: string
}

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

function DirectorsCarousel({ directors }: { directors: Director[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      scrollNext()
    }, 4000) // Auto-slide every 4 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi, scrollNext])

  return (
    <div className="w-full px-4 lg:px-8">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex -mx-4">
          {directors.map((director) => (
            <div
              key={director.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4"
            >
              <Card className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] h-full border-2 border-primary/10 bg-[#0A0E3F] py-0 aspect-[5/6]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={director.photo || "/placeholder.svg"}
                    alt={`${director.name} - ${director.designation}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#0A0E3F]/40 to-[#0A0E3F]/95" />
                <CardContent className="relative z-10 flex flex-1 flex-col justify-end gap-4 p-8">
                  <h3 className="text-3xl font-bold text-primary tracking-tight">{director.name}</h3>
                  <p className="text-blue font-semibold text-lg border-l-4 border-primary pl-4">{director.designation}</p>
                  <p className="text-foreground/90 leading-relaxed text-base text-justify">{director.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: Math.ceil(directors.length / 2) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx * 2)}
            className="w-4 h-4 rounded-full bg-primary/30 hover:bg-primary transition-all duration-300 hover:scale-125 shadow-md"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ValueCard({ value }: { value: Value }) {
  const IconComponent = value.icon

  return (
    <Card className="flex flex-col gap-6 text-center p-8 bg-[#0A0E3F] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#FF1E56]/30 h-full">
      <CardContent className="p-0">
        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <IconComponent className="w-10 h-10 text-[#39FF14]" />
        </div>
        <h3 className="text-2xl font-bold text-[#FF1E56] mb-3">{value.title}</h3>
        <p className="text-white/80 leading-relaxed text-center">{value.description}</p>
      </CardContent>
    </Card>
  )
}

function ValuesCarousel({ values }: { values: Value[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })

  const valueSlides = useMemo(() => {
    return values.map((value) => [value])
  }, [values])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)

    const autoplay = setInterval(() => {
      scrollNext()
    }, 4000)

    return () => {
      clearInterval(autoplay)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, scrollNext])

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-2">
          {valueSlides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] px-2">
              <div className="grid grid-cols-1 gap-4">
                {slide.map((value) => (
                  <ValueCard key={value.title} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {valueSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index ? 'bg-primary' : 'bg-primary/30 hover:bg-primary'
            }`}
            aria-label={`Go to values slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const directors = [
    {
      id: 1,
      name: "Dr. C. Honnappa Gowda",
      designation: "Sports Development Officer & International Kabaddi Player",
      photo: "https://static.wixstatic.com/media/0dd563_aaef4db6f944402b92764f6d9191bf47~mv2.png",
      bio: "Dr. C. Honnappa Gowda brings over 20 years of experience in kabaddi development and sports administration. As a former international player, he has represented India in multiple Asian Games and World Championships. His vision for grassroots development has shaped KKPL into Karnataka's premier kabaddi league.",
    },
    {
      id: 2,
      name: "Dr. Ishwar Angadi",
      designation: "Tournament Director & Former National Player",
      photo: "https://static.wixstatic.com/media/0dd563_c72430dcc6a845cb8ea36f8ef80090f9~mv2.png",
      bio: "Dr. Ishwar Angadi is a celebrated kabaddi administrator and coach with years of experience in building strong tournament ecosystems. His strategic approach to event management and player welfare has contributed immensely to KKPL's reputation for professional excellence.",
    },
    {
      id: 3,
      name: "Vasantha Kavitha SKC Reddy",
      designation: "Technical Director & Certified Coach",
      photo: "https://static.wixstatic.com/media/0dd563_6948ab082c8e4c62a55294242d0c01f5~mv2.png",
      bio: "Vasantha Kavitha SKC Reddy is a certified kabaddi coach known for her emphasis on technical excellence and athlete development. Her leadership and mentoring continue to shape the next generation of kabaddi talent in Karnataka.",
    },
    {
      id: 4,
      name: "Dr. Mamatha",
      designation: "Youth Development Coordinator",
      photo: "https://static.wixstatic.com/media/0dd563_f6fe779c6f8a4cfd981749f236efeee2~mv2.png",
      bio: "Dr. Mamatha specializes in sports psychology and youth development. Her research-based approach to nurturing young athletes has revolutionized how kabaddi players are supported mentally and emotionally within the KKPL framework.",
    },
    {
      id: 5,
      name: "M Arumugam",
      designation: "Operations Director & Former Kabaddi Coach",
      photo: "https://static.wixstatic.com/media/0dd563_81308a8643b142c19a6651f629e772ef~mv2.png",
      bio: "M Arumugam oversees KKPL's logistics and operations. With extensive experience managing national-level tournaments, his organizational leadership ensures seamless coordination between teams, venues, and event partners.",
    },
    {
      id: 6,
      name: "Veeresh A H",
      designation: "Marketing & Public Relations Head",
      photo: "https://static.wixstatic.com/media/0dd563_899d18a6836a41c5ada6717a06306a87~mv2.png",
      bio: "Veeresh A H leads KKPL's marketing and communications initiatives. His creative strategies and partnerships have strengthened KKPL's public presence and expanded its reach among kabaddi enthusiasts across Karnataka.",
    },
  ]

  const values: Value[] = [
    {
      icon: Users,
      title: "Teamwork",
      description: "Building stronger bonds through collaborative spirit and mutual support on and off the field.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Fueling every match with unwavering dedication and love for the game of kabaddi.",
    },
    {
      icon: Shield,
      title: "Discipline",
      description: "Maintaining the highest standards of sportsmanship, training, and personal conduct.",
    },
    {
      icon: Star,
      title: "Growth",
      description: "Nurturing talent and providing opportunities for athletes to reach their full potential.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-blue/90 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/0dd563_4c91f03af3e04733bd4d7cd03fbf843b~mv2(1).png"
            alt="Kabaddi players in traditional formation"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About KKPL</h1>
          <p className="text-xl text-secondary mb-8">
            Celebrating the rich heritage and bright future of Karnataka kabaddi
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Story</h2>
              <p className="text-lg text-foreground leading-relaxed text-justify mb-6">
                The Karnataka Kabaddi Pro League (KKPL) was born from a vision to create a platform where the ancient
                sport of kabaddi could thrive in the modern era. Founded by passionate sports enthusiasts and former
                players, KKPL represents the perfect blend of traditional values and contemporary competitive spirit.
              </p>
              <p className="text-lg text-foreground leading-relaxed text-justify">
                Since our inception, we have been committed to discovering, nurturing, and showcasing the incredible
                kabaddi talent that Karnataka has to offer. Our league serves as a stepping stone for aspiring athletes
                to reach national and international levels while preserving the cultural significance of this beloved
                sport.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/design-mode/0dd563_1f5a94647d7d4882b5c2dd21b0e5974a~mv2(1).png"
                alt="Traditional kabaddi players"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* League Overview */}
      <section className="py-20 bg-gradient-to-r from-blue/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/design-mode/0dd563_ae55628f96184d4c90a03e3574a6eb6b~mv2(1).png"
                alt="KKPL tournament overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">League Overview</h2>
              <p className="text-lg text-foreground leading-relaxed text-justify mb-6">
                KKPL is Karnataka&apos;s premier state-level kabaddi tournament that brings together the finest teams
                from across the state. Our league features a comprehensive tournament structure designed to provide
                maximum exposure and competitive opportunities for all participating teams.
              </p>
              <p className="text-lg text-foreground leading-relaxed text-justify">
                From bustling cities like Bengaluru and Mysuru to smaller towns and rural areas, KKPL unites diverse
                communities through the shared love of kabaddi. Our tournament serves as a melting pot where different
                playing styles, strategies, and regional traditions come together to create an unforgettable sporting
                spectacle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Values</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The principles that guide everything we do at KKPL
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <ValueCard key={value.title} value={value} />
              ))}
            </div>
            <div className="lg:hidden">
              <ValuesCarousel values={values} />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Directors */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Meet Our Directors</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              The visionary leaders driving KKPL&apos;s mission forward
            </p>
          </div>

          <DirectorsCarousel directors={directors} />
        </div>
      </section>
    </div>
  )
}
