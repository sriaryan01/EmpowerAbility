import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "../AdminSidebar";

export default function AdminSidebarExample() {
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
        <main className="flex-1 p-8 bg-background">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p className="text-muted-foreground mt-2">This is where the admin dashboard content would appear.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}
