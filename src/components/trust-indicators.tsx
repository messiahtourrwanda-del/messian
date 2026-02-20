import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    rating: 5,
    text: "Our 14-day East Africa Grand Safari was truly life-changing. Seeing gorillas in Rwanda and the Great Migration in Tanzania — Messiah Safari made every moment magical.",
    tour: "East Africa Grand Safari",
  },
  {
    name: "Michael Chen",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The gorilla trekking experience in Volcanoes National Park exceeded all expectations. Our guide was incredibly knowledgeable and the logistics were flawless.",
    tour: "Gorilla & Chimp Encounter",
  },
  {
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "From the Masai Mara to Zanzibar, every detail was thoughtfully planned. The luxury camps were stunning and the wildlife sightings were beyond our wildest dreams.",
    tour: "Great Migration Experience",
  },
  {
    name: "David Okonkwo",
    location: "Lagos, Nigeria",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "As an African exploring East Africa, I was impressed by the depth of cultural experiences. The team's local connections made all the difference.",
    tour: "Cultural Immersion Safari",
  },
];

const partners = [
  "Rwanda Development Board",
  "Uganda Wildlife Authority",
  "Kenya Tourism Board",
  "Tanzania National Parks",
  "African Travel & Tourism Association",
];

export default function TrustIndicators() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(150,20%,10%)] mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied travelers who&apos;ve experienced the magic of
            East Africa with us
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[hsl(40,20%,97%)] rounded-2xl p-8 relative group hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[hsl(45,80%,55%)]/20" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[hsl(45,80%,55%)]/30"
                />
                <div>
                  <div className="font-semibold text-[hsl(150,20%,10%)]">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[hsl(45,80%,55%)] text-[hsl(45,80%,55%)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="text-xs font-medium text-[hsl(152,45%,25%)] uppercase tracking-wider">
                {t.tour}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[hsl(152,45%,25%)] rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,500+", label: "Happy Travelers" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "98%", label: "Would Recommend" },
              { value: "15+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-[hsl(45,80%,55%)]">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">
            Trusted Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-500 hover:text-[hsl(152,45%,25%)] hover:bg-[hsl(40,20%,96%)] transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
