import { createClient } from "../../../supabase/server";
import { Tour } from "@/lib/types";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star, Users, Filter } from "lucide-react";

export default async function ToursPage() {
  const supabase = await createClient();
  const { data: tours } = await supabase
    .from("tours")
    .select("*")
    .eq("active", true)
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  const allTours = (tours as Tour[]) || [];

  const categories = [
    "All",
    ...new Set(allTours.map((t) => t.category).filter(Boolean)),
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="Safari landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block text-[hsl(45,80%,55%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Tours
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Curated Safari
            <span className="block text-[hsl(45,80%,55%)]">Experiences</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Explore our handcrafted itineraries across East Africa — from gorilla
            treks to Great Migration safaris
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[hsl(40,20%,96%)] text-[hsl(150,20%,10%)] hover:bg-[hsl(152,45%,25%)] hover:text-white transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={tour.image || ""}
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
                <div className="p-6">
                  <div className="text-xs font-medium text-[hsl(152,45%,25%)] uppercase tracking-wider mb-2">
                    {tour.category}
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(150,20%,10%)] mb-3 group-hover:text-[hsl(152,45%,25%)] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tour.short_description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {tour.group_size}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-[hsl(45,80%,55%)] text-[hsl(45,80%,55%)]" />
                      {tour.rating}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tour.highlights.slice(0, 3).map((h) => (
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
                    <span className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[hsl(152,45%,25%)] text-white rounded-lg text-sm font-medium group-hover:bg-[hsl(152,45%,20%)] transition-colors">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {allTours.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No tours available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
