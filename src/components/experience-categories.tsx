import { Binoculars, TreePine, Tent, Heart, Waves, Camera } from "lucide-react";

const categories = [
  {
    title: "Gorilla Trekking",
    description:
      "Trek through misty volcanic forests to encounter endangered mountain gorillas in their natural habitat",
    icon: <TreePine className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
    tours: 8,
    id: "gorilla-trekking",
  },
  {
    title: "Big Five Safaris",
    description:
      "Witness lions, elephants, buffalo, leopards, and rhinos across iconic national parks",
    icon: <Binoculars className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    tours: 15,
    id: "big-five",
  },
  {
    title: "Primate Tracking",
    description:
      "From golden monkeys to chimpanzees, discover East Africa's incredible primate diversity",
    icon: <Camera className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1619451683160-8d896d0b95b6?w=600&q=80",
    tours: 6,
    id: "primate-tracking",
  },
  {
    title: "Cultural Immersion",
    description:
      "Connect with Maasai warriors, Rwandan dancers, and ancient tribal traditions",
    icon: <Heart className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
    tours: 10,
    id: "cultural",
  },
  {
    title: "Beach Extensions",
    description:
      "Unwind on the pristine shores of Zanzibar, Diani Beach, or Lake Tanganyika",
    icon: <Waves className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    tours: 5,
    id: "beach",
  },
  {
    title: "Luxury Camping",
    description:
      "Experience the wild in style with premium tented camps under the African stars",
    icon: <Tent className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
    tours: 7,
    id: "luxury-camping",
  },
];

export default function ExperienceCategories() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(150,20%,8%)]" id="experiences">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[hsl(45,80%,55%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From heart-pounding wildlife encounters to serene cultural
            experiences, find the perfect journey for you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={`#${cat.id}`}
              className="group relative rounded-2xl overflow-hidden h-[300px] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[hsl(152,45%,20%)]/90 group-hover:via-[hsl(152,45%,20%)]/40 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(45,80%,55%)]/20 backdrop-blur-sm flex items-center justify-center text-[hsl(45,80%,55%)] group-hover:bg-[hsl(45,80%,55%)] group-hover:text-[hsl(150,20%,10%)] transition-all duration-300">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                    <span className="text-white/50 text-xs">
                      {cat.tours} tours available
                    </span>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
