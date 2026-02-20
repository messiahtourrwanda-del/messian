import SafariNavbar from "@/components/safari-navbar";
import SafariFooter from "@/components/safari-footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <SafariNavbar />
      <main>{children}</main>
      <SafariFooter />
    </div>
  );
}
