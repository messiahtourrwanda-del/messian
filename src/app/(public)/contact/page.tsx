"use client";

import { useState } from "react";
import { createClient } from "../../../supabase/client";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error: dbError } = await supabase.from("inquiries").insert({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
        status: "new",
      });

      if (dbError) throw dbError;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80"
            alt="African landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block text-[hsl(45,80%,55%)] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Ready to plan your East African adventure? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[hsl(150,20%,10%)] mb-6">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      city: "Kigali, Rwanda",
                      address: "KG 123 St, Kimihurura, Kigali",
                      phone: "+250 123 456 789",
                      label: "Headquarters",
                    },
                    {
                      city: "Kampala, Uganda",
                      address: "Plot 45, Kampala Road",
                      phone: "+256 789 012 345",
                      label: "Uganda Office",
                    },
                    {
                      city: "Nairobi, Kenya",
                      address: "Westlands, Muthangari Drive",
                      phone: "+254 712 345 678",
                      label: "Kenya Office",
                    },
                  ].map((office) => (
                    <div
                      key={office.city}
                      className="p-5 bg-[hsl(40,20%,97%)] rounded-xl"
                    >
                      <div className="text-xs font-medium text-[hsl(152,45%,25%)] uppercase tracking-wider mb-2">
                        {office.label}
                      </div>
                      <div className="font-semibold text-[hsl(150,20%,10%)] mb-2">
                        {office.city}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <MapPin className="w-4 h-4" />
                        {office.address}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <Mail className="w-5 h-5 text-[hsl(152,45%,25%)]" />
                  <div>
                    <div className="text-sm font-medium text-[hsl(150,20%,10%)]">
                      Email
                    </div>
                    <div className="text-sm text-gray-500">
                      info@messiahsafari.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <Clock className="w-5 h-5 text-[hsl(152,45%,25%)]" />
                  <div>
                    <div className="text-sm font-medium text-[hsl(150,20%,10%)]">
                      Working Hours
                    </div>
                    <div className="text-sm text-gray-500">
                      Mon-Fri: 8AM-6PM (EAT) | Sat: 9AM-3PM
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[hsl(40,20%,97%)] rounded-xl">
                  <Globe className="w-5 h-5 text-[hsl(152,45%,25%)]" />
                  <div>
                    <div className="text-sm font-medium text-[hsl(150,20%,10%)]">
                      Response Time
                    </div>
                    <div className="text-sm text-gray-500">
                      Within 24 hours guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {success ? (
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[hsl(152,45%,25%)]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[hsl(152,45%,25%)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(150,20%,10%)] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[hsl(152,45%,25%)]" />
                    <h3 className="text-xl font-bold text-[hsl(150,20%,10%)]">
                      Send Us a Message
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.full_name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              full_name: e.target.value,
                            })
                          }
                          placeholder="Your name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your safari plans, questions, or how we can help..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(152,45%,25%)]/20 focus:border-[hsl(152,45%,25%)] resize-none"
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm bg-red-50 rounded-lg p-3">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[hsl(45,80%,55%)] text-[hsl(150,20%,10%)] rounded-lg hover:bg-[hsl(45,80%,48%)] transition-colors font-semibold text-base shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
