import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      <AppSidebar />

      <main className="ml-66.25 min-h-screen">
        <AppHeader />
        <section className="p-7">{children}</section>
      </main>
    </div>
  );
}
