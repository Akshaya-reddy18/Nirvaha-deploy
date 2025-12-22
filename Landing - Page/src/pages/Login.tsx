import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Brain, Heart, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDoctorLogin = () => {
    navigate("/dashboard/doctor");
  };

  const handleHRLogin = () => {
    navigate("/dashboard/hr");
  };

  return (
    <div className="min-h-screen bg-calm-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-primary mr-2" />
            <h1 className="text-3xl font-bold bg-wellness-gradient bg-clip-text text-transparent">
              Nirvaha
            </h1>
          </div>
          <p className="text-muted-foreground">Mental Wellness Platform</p>
        </div>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="doctor" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="doctor" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Doctor
                </TabsTrigger>
                <TabsTrigger value="hr" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  HR Professional
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="doctor" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">Email</Label>
                  <Input
                    id="doctor-email"
                    type="email"
                    placeholder="doctor@nirvaha.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">Password</Label>
                  <Input
                    id="doctor-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleDoctorLogin}
                  className="w-full bg-primary hover:bg-primary-dark transition-smooth"
                >
                  Sign in as Doctor
                </Button>
              </TabsContent>
              
              <TabsContent value="hr" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="hr-email">Email</Label>
                  <Input
                    id="hr-email"
                    type="email"
                    placeholder="hr@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hr-password">Password</Label>
                  <Input
                    id="hr-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleHRLogin}
                  className="w-full bg-primary hover:bg-primary-dark transition-smooth"
                >
                  Sign in as HR Professional
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;