import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import AdminDashboard from "@/components/admin-dashboard";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch all dashboard data
  const [
    { data: bookings },
    { data: inquiries },
    { data: tours },
    { count: subscriberCount },
  ] = await Promise.all([
    supabase.from("bookings").select("*").order("created_at", { ascending: false }),
    supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
    supabase.from("tours").select("*").order("created_at", { ascending: false }),
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
  ]);

  return (
    <AdminDashboard
      user={user}
      bookings={bookings || []}
      inquiries={inquiries || []}
      tours={tours || []}
      subscriberCount={subscriberCount || 0}
    />
  );
}
