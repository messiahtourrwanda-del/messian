import {
  Award,
  Heart,
  MapPin,
  Shield,
  TreePine,
  Users,
  Star,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&q=80"
            alt="African landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block text-[hsl(45,80%,55%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Crafting unforgettable East African safari experiences since 2009
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(150,20%,10%)] mb-6">
                Messiah Safari & Tours
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in Kigali, Rwanda, Messiah Safari & Tours has grown from a
                small local operator to one of East Africa&apos;s most trusted names in
                premium safari experiences. We specialize in multi-country
                itineraries that showcase the incredible diversity of Rwanda,
                Uganda, Kenya, Tanzania, and Burundi.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team of experienced guides, wildlife experts, and travel
                consultants work together to create personalized journeys that go
                beyond the ordinary. Whether you&apos;re tracking gorillas in the
                misty mountains or witnessing the Great Migration across the
                Serengeti, we ensure every moment is extraordinary.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <div className="text-3xl font-bold text-[hsl(152,45%,25%)] mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <div className="text-3xl font-bold text-[hsl(152,45%,25%)] mb-1">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-500">Happy Travelers</div>
                </div>
                <div className="text-center p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <div className="text-3xl font-bold text-[hsl(152,45%,25%)] mb-1">
                    5
                  </div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
                <div className="text-center p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <div className="text-3xl font-bold text-[hsl(152,45%,25%)] mb-1">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="Safari experience"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[hsl(152,45%,25%)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold mb-1">Since 2009</div>
                <div className="text-white/70 text-sm">
                  Creating memories across East Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[hsl(150,20%,8%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[hsl(45,80%,55%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety First",
                desc: "Licensed, insured, and with emergency protocols at every destination",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Responsible Tourism",
                desc: "We support local communities and conservation efforts in every country we operate",
              },
              {
                icon: <TreePine className="w-8 h-8" />,
                title: "Eco-Friendly",
                desc: "Carbon-offset programs, eco-lodges, and sustainable practices throughout",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Guides",
                desc: "Certified local guides with deep knowledge of wildlife, culture, and terrain",
              },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(45,80%,55%)]/10 flex items-center justify-center mx-auto mb-4 text-[hsl(45,80%,55%)]">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(150,20%,10%)] mb-4">
              Meet the Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emmanuel Nkurunziza",
                role: "Founder & Lead Guide",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                bio: "15+ years guiding safaris across all five East African countries",
              },
              {
                name: "Grace Uwimana",
                role: "Head of Operations",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                bio: "Expert in crafting seamless multi-country itineraries",
              },
              {
                name: "Joseph Kamau",
                role: "Wildlife Expert",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
                bio: "Certified primatologist and Big Five tracking specialist",
              },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[hsl(150,20%,10%)] mb-1">
                  {member.name}
                </h3>
                <div className="text-[hsl(152,45%,25%)] text-sm font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
