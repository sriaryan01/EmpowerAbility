import BrowseSchemes from "../BrowseSchemes";
import UserNavbar from "../UserNavbar";

export default function BrowseSchemesExample() {
  return (
    <div>
      <UserNavbar
        userName="Rajesh Kumar"
        onLogout={() => console.log("Logout clicked")}
      />
      <BrowseSchemes />
    </div>
  );
}
