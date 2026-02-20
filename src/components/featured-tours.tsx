"use client";

import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const tours = [
  {
    title: "East Africa Grand Safari",
    slug: "east-africa-grand-safari",
    countries: ["Kenya", "Tanzania", "Rwanda"],
    duration: "14 Days",
    groupSize: "2-8",
    rating: 4.9,
    reviews: 127,
    price: 5499,
    image: "https://images.unsplash.com/photo-1535338454528-1b5a12780c22?w=800&q=80",
    highlights: ["Masai Mara", "Serengeti", "Gorilla Trek"],
    featured: true,
  },
  {
    title: "Gorilla & Chimp Encounter",
    slug: "gorilla-chimp-encounter",
    countries: ["Rwanda", "Uganda"],
    duration: "8 Days",
    groupSize: "2-6",
    rating: 5.0,
    reviews: 89,
    price: 3999,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    highlights: ["Volcanoes NP", "Bwindi", "Kibale Forest"],
    featured: false,
  },
  {
    title: "Great Migration Experience",
    slug: "great-migration-experience",
    countries: ["Kenya", "Tanzania"],
    duration: "10 Days",
    groupSize: "2-8",
    rating: 4.8,
    reviews: 203,
    price: 4299,
    image: "https://images.unsplash.com/photo-1534759926787-89fa60f18909?w=800&q=80",
    highlights: ["Masai Mara", "Serengeti", "Ngorongoro"],
    featured: false,
  },
  {
    title: "Kilimanjaro Summit & Safari",
    slug: "kilimanjaro-summit-safari",
    countries: ["Tanzania"],
    duration: "12 Days",
    groupSize: "2-10",
    rating: 4.7,
    reviews: 156,
    price: 3799,
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&q=80",
    highlights: ["Kilimanjaro Trek", "Serengeti", "Zanzibar"],
    featured: false,
  },
  {
    title: "Primate Safari Complete",
    slug: "primate-safari-complete",
    countries: ["Rwanda", "Uganda", "Tanzania"],
    duration: "15 Days",
    groupSize: "2-6",
    rating: 4.9,
    reviews: 67,
    price: 6999,
    image: "https://images.unsplash.com/photo-1619451683160-8d896d0b95b6?w=800&q=80",
    highlights: ["Mountain Gorillas", "Chimps", "Colobus Monkeys"],
    featured: true,
  },
  {
    title: "Lake Tanganyika & Beyond",
    slug: "lake-tanganyika-beyond",
    countries: ["Burundi", "Tanzania"],
    duration: "7 Days",
    groupSize: "2-8",
    rating: 4.6,
    reviews: 34,
    price: 2499,
    image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&q=80",
    highlights: ["Lake Tanganyika", "Kibira NP", "Rusizi"],
    featured: false,
  },
];

export default function FeaturedTours() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="tours">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Featured Tours
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(150,20%,10%)] mb-3">
              Curated Safari Experiences
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Expertly crafted multi-country itineraries for the ultimate East
              African adventure
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-[hsl(152,45%,25%)] text-[hsl(152,45%,25%)] hover:bg-[hsl(152,45%,25%)] hover:text-white transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-[hsl(152,45%,25%)] text-[hsl(152,45%,25%)] hover:bg-[hsl(152,45%,25%)] hover:text-white transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Tour Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tours.map((tour, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[340px] md:w-[360px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group snap-start overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {tour.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[hsl(45,80%,55%)] text-[hsl(150,20%,10%)] text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex gap-1.5">
                  {tour.countries.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[hsl(150,20%,10%)] mb-3 group-hover:text-[hsl(152,45%,25%)] transition-colors">
                  {tour.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-[hsl(45,80%,55%)] text-[hsl(45,80%,55%)]" />
                    {tour.rating}
                    <span className="text-gray-400">({tour.reviews})</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tour.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 bg-[hsl(40,20%,96%)] text-[hsl(150,20%,30%)] text-xs rounded-full font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400">From</span>
                    <div className="text-xl font-bold text-[hsl(152,45%,25%)]">
                      ${tour.price.toLocaleString()}
                    </div>
                    <span className="text-xs text-gray-400">per person</span>
                  </div>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[hsl(152,45%,25%)] text-white rounded-lg hover:bg-[hsl(152,45%,20%)] transition-colors text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
