"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Mountain, TreePine, Waves, Sun, Bird } from "lucide-react";

const countries = [
  {
    name: "Rwanda",
    tagline: "Land of a Thousand Hills",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    attractions: ["Mountain Gorillas", "Volcanoes National Park", "Lake Kivu", "Nyungwe Forest"],
    icon: <Mountain className="w-5 h-5" />,
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Uganda",
    tagline: "Pearl of Africa",
    image: "https://images.unsplash.com/photo-1619451683160-8d896d0b95b6?w=800&q=80",
    attractions: ["Bwindi Gorillas", "Queen Elizabeth NP", "Murchison Falls", "Kibale Chimps"],
    icon: <TreePine className="w-5 h-5" />,
    color: "from-green-600 to-green-800",
  },
  {
    name: "Kenya",
    tagline: "Magical Kenya",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    attractions: ["Masai Mara", "Amboseli National Park", "Great Rift Valley", "Diani Beach"],
    icon: <Sun className="w-5 h-5" />,
    color: "from-amber-600 to-amber-800",
  },
  {
    name: "Tanzania",
    tagline: "The Soul of Africa",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    attractions: ["Serengeti Migration", "Ngorongoro Crater", "Mount Kilimanjaro", "Zanzibar"],
    icon: <Bird className="w-5 h-5" />,
    color: "from-orange-600 to-orange-800",
  },
  {
    name: "Burundi",
    tagline: "Heart of Africa",
    image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&q=80",
    attractions: ["Lake Tanganyika", "Kibira National Park", "Rusizi Reserve", "Gitega Culture"],
    icon: <Waves className="w-5 h-5" />,
    color: "from-teal-600 to-teal-800",
  },
];

export default function CountryNavigator() {
  const [activeCountry, setActiveCountry] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[hsl(40,20%,97%)]" id="destinations">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Destinations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(150,20%,10%)] mb-4">
            Five Countries, One Epic Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the diverse landscapes and wildlife of East Africa across five
            extraordinary destinations
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                activeCountry === index
                  ? "lg:col-span-2 md:col-span-2"
                  : "lg:col-span-1"
              }`}
              onMouseEnter={() => setActiveCountry(index)}
              onClick={() => setActiveCountry(index)}
            >
              <div
                className={`relative ${
                  activeCountry === index ? "h-[400px] md:h-[450px]" : "h-[280px] md:h-[450px]"
                } transition-all duration-500`}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${country.color} opacity-60 group-hover:opacity-50 transition-opacity`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    {country.icon}
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs uppercase tracking-wider">
                      East Africa
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {country.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {country.tagline}
                  </p>

                  {/* Attractions - shown on active */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      activeCountry === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.attractions.map((attr) => (
                        <span
                          key={attr}
                          className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {attr}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`#${country.name.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-[hsl(45,80%,55%)] text-sm font-semibold hover:gap-3 transition-all"
                    >
                      Explore {country.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
