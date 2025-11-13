import HomePage from "../HomePage";
import UserNavbar from "../UserNavbar";

export default function HomePageExample() {
  return (
    <div>
      <UserNavbar
        userName="Rajesh Kumar"
        onLogout={() => console.log("Logout clicked")}
      />
      <HomePage />
    </div>
  );
}
