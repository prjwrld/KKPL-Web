"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Matches", "Players", "Behind the Scenes", "Fans"]

  const galleryImages = [
    {
      id: 1,
      src: "https://static.wixstatic.com/media/0dd563_097d2a8e7911410090b4ade3e930363e~mv2.png",
      alt: "Intense kabaddi match action with players in raid",
      category: "Matches",
      title: "Championship Final",
      description: "Thrilling final match between top teams",
    },
    {
      id: 2,
      src: "https://static.wixstatic.com/media/0dd563_886fffc247f2455baaeddbbb9e729925~mv2.png",
      alt: "Professional kabaddi player in action pose",
      category: "Players",
      title: "Star Raider",
      description: "Top scorer of the tournament",
    },
    {
      id: 3,
      src: "https://static.wixstatic.com/media/0dd563_b8e30e65f299454db7c6674c47ebe019~mv2.png",
      alt: "Behind the scenes preparation before kabaddi match",
      category: "Behind the Scenes",
      title: "Pre-Match Preparation",
      description: "Teams getting ready for the big match",
    },
    {
      id: 4,
      src: "https://static.wixstatic.com/media/0dd563_043e371e12b5495ca10c84123ebf3bdf~mv2.png",
      alt: "Enthusiastic kabaddi fans cheering in stadium",
      category: "Fans",
      title: "Passionate Supporters",
      description: "Fans showing their team spirit",
    },
    {
      id: 5,
      src: "https://static.wixstatic.com/media/0dd563_01224e15bf2b49c1bd3de94cee47e1e5~mv2.png",
      alt: "Kabaddi tackle in progress during tournament",
      category: "Matches",
      title: "Perfect Tackle",
      description: "Defensive excellence on display",
    },
    {
      id: 6,
      src: "https://static.wixstatic.com/media/0dd563_f05e2ca59ac74513b55ef8a47bce85ad~mv2.png",
      alt: "Team captain leading kabaddi team",
      category: "Players",
      title: "Team Captain",
      description: "Leadership on and off the court",
    },
    {
      id: 7,
      src: "https://static.wixstatic.com/media/0dd563_3fcad055fbbb48759ec96b946ab739d6~mv2.png",
      alt: "Coaches strategizing during kabaddi timeout",
      category: "Behind the Scenes",
      title: "Strategic Timeout",
      description: "Coaches planning the next move",
    },
    {
      id: 8,
      src: "https://static.wixstatic.com/media/0dd563_e9fa9c94f3a14df28da3310122b913dd~mv2.png",
      alt: "Victory celebration with kabaddi fans",
      category: "Fans",
      title: "Victory Celebration",
      description: "Fans celebrating their team's win",
    },
    {
      id: 9,
      src: "https://static.wixstatic.com/media/0dd563_46cc3c3062dc459d81c99309defe0fa1~mv2.png",
      alt: "Kabaddi raid attempt in tournament match",
      category: "Matches",
      title: "Daring Raid",
      description: "A bold raid attempt in crucial moments",
    },
    {
      id: 10,
      src: "https://static.wixstatic.com/media/0dd563_a899271d7f964639b0615d951d69211b~mv2.png",
      alt: "Young kabaddi player showing skills",
      category: "Players",
      title: "Rising Star",
      description: "Young talent making their mark",
    },
    {
      id: 11,
      src: "https://static.wixstatic.com/media/0dd563_89d008e20e3540a48cd30bb2788ce9b4~mv2.png",
      alt: "Referee preparing for kabaddi match",
      category: "Behind the Scenes",
      title: "Match Officials",
      description: "Ensuring fair play and sportsmanship",
    },
    {
      id: 12,
      src: "https://static.wixstatic.com/media/0dd563_8f2942e8716d4631bbb189fbca399e30~mv2.png",
      alt: "Colorful kabaddi fan banners and flags",
      category: "Fans",
      title: "Team Colors",
      description: "Vibrant display of team support",
    },
  ]

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return

    const currentFilteredIndex = filteredImages.findIndex((img) => img.id === galleryImages[selectedImageIndex].id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentFilteredIndex > 0 ? currentFilteredIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentFilteredIndex < filteredImages.length - 1 ? currentFilteredIndex + 1 : 0
    }

    const newImageId = filteredImages[newIndex].id
    const newGalleryIndex = galleryImages.findIndex((img) => img.id === newImageId)
    setSelectedImageIndex(newGalleryIndex)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-blue/90 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/0dd563_2c9b3cb70817406ca85e9a46679b00f3~mv2.png"
            alt="KKPL gallery showcase with kabaddi action shots"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-secondary mb-8">Capturing the spirit and energy of KKPL</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(galleryImages.findIndex((img) => img.id === image.id))}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative w-full h-64">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 z-50 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 z-50 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative max-w-full max-h-full p-8">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={galleryImages[selectedImageIndex].src || "/placeholder.svg"}
                    alt={galleryImages[selectedImageIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImageIndex].title}</h3>
                    <p className="text-lg opacity-90 mb-2">{galleryImages[selectedImageIndex].description}</p>
                    <span className="inline-block bg-primary/80 text-white px-3 py-1 rounded text-sm font-semibold">
                      {galleryImages[selectedImageIndex].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue/10">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Be Part of the Action</h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto">
              Join us for the next KKPL season and create memories that will last a lifetime. Register your team or book
              your tickets today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 rounded-lg font-bold"
              >
                Register Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue text-blue hover:bg-blue hover:text-white text-lg px-8 py-4 rounded-lg font-bold bg-transparent"
              >
                Buy Tickets
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
