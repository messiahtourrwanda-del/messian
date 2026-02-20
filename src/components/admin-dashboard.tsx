"use client";

import { useState } from "react";
import { createClient } from "../../supabase/client";
import Link from "next/link";
import { Booking, Inquiry, Tour } from "@/lib/types";
import {
  LayoutDashboard,
  CalendarCheck,
  MessageSquare,
  Map,
  Users,
  LogOut,
  TrendingUp,
  DollarSign,
  Eye,
  ChevronDown,
  Check,
  X,
  Clock,
  Mail,
  Phone,
  User as UserIcon,
  Loader2,
  RefreshCw,
} from "lucide-react";

interface AdminDashboardProps {
  user: any;
  bookings: Booking[];
  inquiries: Inquiry[];
  tours: Tour[];
  subscriberCount: number;
}

type Tab = "overview" | "bookings" | "inquiries" | "tours";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  converted: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
};

export default function AdminDashboard({
  user,
  bookings,
  inquiries,
  tours,
  subscriberCount,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const totalRevenue = bookings
    .filter((b) => b.status === "confirmed" || b.status === "completed")
    .reduce((sum, b) => sum + (b.total_price || 0), 0);

  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const newInquiries = inquiries.filter((i) => i.status === "new").length;

  const handleBookingStatus = async (id: string, status: string) => {
    setUpdatingId(id);
    const supabase = createClient();
    await supabase
      .from("bookings")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);
    window.location.reload();
  };

  const handleInquiryStatus = async (id: string, status: string) => {
    setUpdatingId(id);
    const supabase = createClient();
    await supabase.from("inquiries").update({ status }).eq("id", id);
    window.location.reload();
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/sign-in";
  };

  const tabs: { id: Tab; label: string; icon: any; badge?: number }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    {
      id: "bookings",
      label: "Bookings",
      icon: CalendarCheck,
      badge: pendingBookings,
    },
    {
      id: "inquiries",
      label: "Inquiries",
      icon: MessageSquare,
      badge: newInquiries,
    },
    { id: "tours", label: "Tours", icon: Map },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="bg-[hsl(152,45%,20%)] text-white shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[hsl(45,80%,55%)] flex items-center justify-center">
                <span className="text-[hsl(150,20%,10%)] font-bold text-sm">
                  M
                </span>
              </div>
              <span className="font-bold text-lg hidden sm:block">
                Messiah Safari
              </span>
            </Link>
            <span className="text-white/40 mx-2 hidden sm:block">|</span>
            <span className="text-white/70 text-sm hidden sm:block">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">View Site</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <UserIcon className="w-4 h-4" />
              </div>
              <span className="text-sm hidden sm:block">{user.email}</span>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[hsl(152,45%,25%)] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Total Bookings</span>
                  <CalendarCheck className="w-5 h-5 text-[hsl(152,45%,25%)]" />
                </div>
                <div className="text-3xl font-bold text-[hsl(150,20%,10%)]">
                  {bookings.length}
                </div>
                <div className="text-sm text-yellow-600 mt-1">
                  {pendingBookings} pending
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Revenue</span>
                  <DollarSign className="w-5 h-5 text-[hsl(45,80%,55%)]" />
                </div>
                <div className="text-3xl font-bold text-[hsl(150,20%,10%)]">
                  ${totalRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  From confirmed bookings
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Inquiries</span>
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-[hsl(150,20%,10%)]">
                  {inquiries.length}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  {newInquiries} new
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Newsletter</span>
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-3xl font-bold text-[hsl(150,20%,10%)]">
                  {subscriberCount}
                </div>
                <div className="text-sm text-purple-600 mt-1">Subscribers</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold text-[hsl(150,20%,10%)]">
                    Recent Bookings
                  </h3>
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className="text-sm text-[hsl(152,45%,25%)] hover:underline"
                  >
                    View all →
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {bookings.slice(0, 5).map((b) => (
                    <div key={b.id} className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm text-[hsl(150,20%,10%)]">
                          {b.full_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {b.tour_title} •{" "}
                          {new Date(b.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">
                          ${(b.total_price || 0).toLocaleString()}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status]}`}
                        >
                          {b.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  {bookings.length === 0 && (
                    <div className="p-8 text-center text-gray-400 text-sm">
                      No bookings yet
                    </div>
                  )}
                </div>
              </div>

              {/* Recent Inquiries */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold text-[hsl(150,20%,10%)]">
                    Recent Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className="text-sm text-[hsl(152,45%,25%)] hover:underline"
                  >
                    View all →
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {inquiries.slice(0, 5).map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium text-sm text-[hsl(150,20%,10%)]">
                          {inq.full_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {inq.email} •{" "}
                          {new Date(inq.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[inq.status]}`}
                      >
                        {inq.status}
                      </span>
                    </div>
                  ))}
                  {inquiries.length === 0 && (
                    <div className="p-8 text-center text-gray-400 text-sm">
                      No inquiries yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-[hsl(150,20%,10%)]">
                All Bookings ({bookings.length})
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Customer
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Tour
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Travel Date
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Travelers
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Total
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="font-medium text-sm text-[hsl(150,20%,10%)]">
                          {b.full_name}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {b.email}
                        </div>
                        {b.phone && (
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {b.phone}
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-sm text-[hsl(150,20%,10%)]">
                          {b.tour_title}
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(b.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-600">
                        {b.travel_date
                          ? new Date(b.travel_date).toLocaleDateString()
                          : "Flexible"}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-600">
                        {b.travelers}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[hsl(150,20%,10%)]">
                        ${(b.total_price || 0).toLocaleString()}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[b.status]}`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {updatingId === b.id ? (
                          <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                        ) : (
                          <div className="flex gap-1">
                            {b.status === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleBookingStatus(b.id, "confirmed")
                                  }
                                  className="p-1.5 rounded-lg hover:bg-green-50 text-green-600 transition-colors"
                                  title="Confirm"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleBookingStatus(b.id, "cancelled")
                                  }
                                  className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                                  title="Cancel"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </>
                            )}
                            {b.status === "confirmed" && (
                              <button
                                onClick={() =>
                                  handleBookingStatus(b.id, "completed")
                                }
                                className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-medium hover:bg-blue-100 transition-colors"
                              >
                                Complete
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {bookings.length === 0 && (
                <div className="p-12 text-center text-gray-400">
                  <CalendarCheck className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No bookings yet. They will appear here when customers book tours.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Inquiries Tab */}
        {activeTab === "inquiries" && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-[hsl(150,20%,10%)]">
                All Inquiries ({inquiries.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-5 hover:bg-gray-50/50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-[hsl(150,20%,10%)] mb-1">
                        {inq.full_name}
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {inq.email}
                        </span>
                        {inq.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {inq.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />{" "}
                          {new Date(inq.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[inq.status]}`}
                      >
                        {inq.status}
                      </span>
                      {updatingId === inq.id ? (
                        <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                      ) : (
                        <select
                          value={inq.status}
                          onChange={(e) =>
                            handleInquiryStatus(inq.id, e.target.value)
                          }
                          className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      )}
                    </div>
                  </div>
                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-2">
                    {inq.destination && (
                      <span>Destination: <strong>{inq.destination}</strong></span>
                    )}
                    {inq.travelers && (
                      <span>Travelers: <strong>{inq.travelers}</strong></span>
                    )}
                    {inq.travel_date && (
                      <span>Date: <strong>{inq.travel_date}</strong></span>
                    )}
                  </div>
                  {inq.interests.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {inq.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-2 py-0.5 bg-[hsl(40,20%,96%)] rounded-full text-xs text-gray-600"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  )}
                  {inq.message && (
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mt-2">
                      {inq.message}
                    </p>
                  )}
                </div>
              ))}
              {inquiries.length === 0 && (
                <div className="p-12 text-center text-gray-400">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No inquiries yet. They will appear here when users submit forms.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tours Tab */}
        {activeTab === "tours" && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-[hsl(150,20%,10%)]">
                All Tours ({tours.length})
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Tour
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Countries
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Duration
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Price
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Rating
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={tour.image || ""}
                            alt={tour.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-medium text-sm text-[hsl(150,20%,10%)]">
                              {tour.title}
                            </div>
                            <div className="text-xs text-gray-400">
                              {tour.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1">
                          {tour.countries.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-600">
                        {tour.duration}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[hsl(150,20%,10%)]">
                        ${tour.price.toLocaleString()}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-600">
                        ⭐ {tour.rating} ({tour.reviews_count})
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            tour.active
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tour.active ? "Active" : "Inactive"}
                        </span>
                        {tour.featured && (
                          <span className="ml-2 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
