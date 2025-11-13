import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff } from "lucide-react";
import SpeechToTextButton from "./SpeechToTextButton";

interface AuthPageProps {
  onLogin: (username: string, role: "user" | "admin") => void;
}

export default function AuthPage({ onLogin }: AuthPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user" as "user" | "admin",
    disabilityType: "",
    phone: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    onLogin(loginData.username, loginData.username.includes("admin") ? "admin" : "user");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", registerData);
    onLogin(registerData.fullName, registerData.role);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">EmpowerAbility</h1>
          <p className="text-muted-foreground">Access government welfare schemes with ease</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2" data-testid="auth-tabs">
            <TabsTrigger value="login" data-testid="tab-login">Login</TabsTrigger>
            <TabsTrigger value="register" data-testid="tab-register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-username">Username or Email</Label>
                    <div className="relative">
                      <Input
                        id="login-username"
                        type="text"
                        placeholder="Enter your username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        required
                        data-testid="input-login-username"
                        aria-label="Username or Email"
                      />
                      <div className="absolute right-0 top-0">
                        <SpeechToTextButton
                          onTranscript={(text) => setLoginData({ ...loginData, username: text })}
                          label="Voice input for username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        data-testid="input-login-password"
                        aria-label="Password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0"
                        onClick={() => setShowPassword(!showPassword)}
                        data-testid="button-toggle-password"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" data-testid="button-login">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Register to access government welfare schemes</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={registerData.fullName}
                        onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                        required
                        data-testid="input-register-name"
                        aria-label="Full Name"
                      />
                      <div className="absolute right-0 top-0">
                        <SpeechToTextButton
                          onTranscript={(text) => setRegisterData({ ...registerData, fullName: text })}
                          label="Voice input for full name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Enter your email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                        data-testid="input-register-email"
                        aria-label="Email"
                      />
                      <div className="absolute right-0 top-0">
                        <SpeechToTextButton
                          onTranscript={(text) => setRegisterData({ ...registerData, email: text })}
                          label="Voice input for email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Phone Number</Label>
                    <div className="relative">
                      <Input
                        id="register-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                        required
                        data-testid="input-register-phone"
                        aria-label="Phone Number"
                      />
                      <div className="absolute right-0 top-0">
                        <SpeechToTextButton
                          onTranscript={(text) => setRegisterData({ ...registerData, phone: text })}
                          label="Voice input for phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-disability">Disability Type</Label>
                    <div className="relative">
                      <Input
                        id="register-disability"
                        type="text"
                        placeholder="e.g., Visual, Hearing, Mobility"
                        value={registerData.disabilityType}
                        onChange={(e) => setRegisterData({ ...registerData, disabilityType: e.target.value })}
                        data-testid="input-register-disability"
                        aria-label="Disability Type"
                      />
                      <div className="absolute right-0 top-0">
                        <SpeechToTextButton
                          onTranscript={(text) => setRegisterData({ ...registerData, disabilityType: text })}
                          label="Voice input for disability type"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <RadioGroup
                      value={registerData.role}
                      onValueChange={(value) => setRegisterData({ ...registerData, role: value as "user" | "admin" })}
                      data-testid="radio-account-type"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="user" id="role-user" />
                        <Label htmlFor="role-user" className="font-normal">
                          User (Person with Disability)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="admin" id="role-admin" />
                        <Label htmlFor="role-admin" className="font-normal">
                          Admin (Government Authority)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="Create a password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                      data-testid="input-register-password"
                      aria-label="Password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input
                      id="register-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                      data-testid="input-register-confirm-password"
                      aria-label="Confirm Password"
                    />
                  </div>

                  <Button type="submit" className="w-full" data-testid="button-register">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
