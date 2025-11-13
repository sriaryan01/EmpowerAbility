import { useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NotFound from "@/pages/not-found";
import AuthPage from "@/components/AuthPage";
import UserNavbar from "@/components/UserNavbar";
import HomePage from "@/components/HomePage";
import BrowseSchemes from "@/components/BrowseSchemes";
import UserDashboard from "@/components/UserDashboard";
import AdminSidebar from "@/components/AdminSidebar";
import AdminDashboard from "@/components/AdminDashboard";
import AdminSchemes from "@/components/AdminSchemes";
import AdminApplications from "@/components/AdminApplications";

function UserRouter({ userName, onLogout }: { userName: string; onLogout: () => void }) {
  return (
    <div>
      <UserNavbar userName={userName} onLogout={onLogout} />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/browse" component={BrowseSchemes} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function AdminRouter({ adminName, onLogout }: { adminName: string; onLogout: () => void }) {
  const style = {
    "--sidebar-width": "16rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AdminSidebar adminName={adminName} onLogout={onLogout} />
        <div className="flex flex-col flex-1">
          <header className="flex items-center gap-4 p-4 border-b">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
          </header>
          <main className="flex-1 overflow-auto">
            <Switch>
              <Route path="/admin" component={AdminDashboard} />
              <Route path="/admin/schemes" component={AdminSchemes} />
              <Route path="/admin/applications" component={AdminApplications} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function App() {
  const [location, setLocation] = useLocation();
  const [user, setUser] = useState<{ name: string; role: "user" | "admin" } | null>(null);

  const handleLogin = (username: string, role: "user" | "admin") => {
    setUser({ name: username, role });
    if (role === "admin") {
      setLocation("/admin");
    } else {
      setLocation("/");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLocation("/auth");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!user ? (
          <AuthPage onLogin={handleLogin} />
        ) : user.role === "admin" ? (
          <AdminRouter adminName={user.name} onLogout={handleLogout} />
        ) : (
          <UserRouter userName={user.name} onLogout={handleLogout} />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
