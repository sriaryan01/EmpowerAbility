import UserDashboard from "../UserDashboard";
import UserNavbar from "../UserNavbar";

export default function UserDashboardExample() {
  return (
    <div>
      <UserNavbar
        userName="Rajesh Kumar"
        onLogout={() => console.log("Logout clicked")}
      />
      <UserDashboard />
    </div>
  );
}
