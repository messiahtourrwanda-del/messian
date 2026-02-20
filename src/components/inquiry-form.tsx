"use client";

import { Send, Calendar, Users, MapPin, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    travelDate: "",
    interests: [] as string[],
    message: "",
  });

  const interestOptions = [
    "Gorilla Trekking",
    "Big Five Safari",
    "Primate Tracking",
    "Cultural Immersion",
    "Beach Extension",
    "Luxury Camping",
    "Photography Tour",
    "Family Adventure",
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <section
      className="py-20 md:py-28 bg-[hsl(40,20%,97%)] relative overflow-hidden"
      id="inquiry"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=60"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <span className="inline-block text-[hsl(45,80%,45%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Start Planning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(150,20%,10%)] mb-6">
              Plan Your Dream Safari
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tell us about your ideal adventure and our expert travel
              consultants will craft a personalized itinerary just for you. No
              obligation, completely free.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(152,45%,25%)]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[hsl(152,45%,25%)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(150,20%,10%)]">
                    Flexible Dates
                  </h4>
                  <p className="text-sm text-gray-500">
                    We tailor every trip to your preferred travel window
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(152,45%,25%)]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[hsl(152,45%,25%)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(150,20%,10%)]">
                    Private & Group Tours
                  </h4>
                  <p className="text-sm text-gray-500">
                    Solo, couples, families, or groups — we accommodate all
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(152,45%,25%)]/10 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-[hsl(152,45%,25%)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(150,20%,10%)]">
                    Quick Response
                  </h4>
                  <p className="text-sm text-gray-500">
                    Receive a custom proposal within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.destination}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destination: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors appearance-none bg-white"
                    >
                      <option value="">Select destination</option>
                      <option value="rwanda">Rwanda</option>
                      <option value="uganda">Uganda</option>
                      <option value="kenya">Kenya</option>
                      <option value="tanzania">Tanzania</option>
                      <option value="burundi">Burundi</option>
                      <option value="multi">Multi-Country</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.travelers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          travelers: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors appearance-none bg-white"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3-4">3-4 Travelers</option>
                      <option value="5-8">5-8 Travelers</option>
                      <option value="9+">9+ Travelers</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          travelDate: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Interests (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? "bg-[hsl(152,45%,25%)] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream safari — any special requests, occasions, or must-see experiences..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[hsl(45,80%,55%)] text-[hsl(150,20%,10%)] rounded-lg hover:bg-[hsl(45,80%,48%)] transition-colors font-semibold text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Request Your Custom Itinerary
              </button>

              <p className="text-center text-xs text-gray-400">
                Free consultation • No obligation • Response within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
