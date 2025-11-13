import AuthPage from "../AuthPage";

export default function AuthPageExample() {
  return (
    <AuthPage
      onLogin={(username, role) => {
        console.log("Login successful:", username, role);
      }}
    />
  );
}
