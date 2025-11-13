import UserNavbar from "../UserNavbar";
import { Route, Switch } from "wouter";

export default function UserNavbarExample() {
  return (
    <div>
      <UserNavbar
        userName="Rajesh Kumar"
        onLogout={() => console.log("Logout clicked")}
      />
      <Switch>
        <Route path="/" component={() => <div className="p-8">Home Page Content</div>} />
        <Route path="/browse" component={() => <div className="p-8">Browse Schemes Content</div>} />
        <Route path="/dashboard" component={() => <div className="p-8">Dashboard Content</div>} />
      </Switch>
    </div>
  );
}
