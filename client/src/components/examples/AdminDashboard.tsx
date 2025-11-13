import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "../AdminSidebar";
import AdminDashboard from "../AdminDashboard";

export default function AdminDashboardExample() {
  const style = {
    "--sidebar-width": "16rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AdminSidebar
          adminName="Dr. Priya Sharma"
          onLogout={() => console.log("Logout clicked")}
        />
        <div className="flex flex-col flex-1">
          <header className="flex items-center gap-4 p-4 border-b">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </header>
          <main className="flex-1 overflow-auto">
            <AdminDashboard />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
