import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Database,
  Save,
  Calendar
} from "lucide-react";
import DoctorAvailability from "../components/DoctorAvailability";
import { useRole } from "../contexts/RoleContext";

const Settings = () => {
  const { currentRole } = useRole();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and application preferences</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark transition-smooth">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className={`grid w-full ${currentRole === 'doctor' ? 'grid-cols-6' : 'grid-cols-5'}`}>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          {currentRole === 'doctor' && (
            <TabsTrigger value="availability">Availability</TabsTrigger>
          )}
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal and professional details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Dr. Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Wilson" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="dr.wilson@nirvaha.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">License Number</Label>
                  <Input id="license" defaultValue="MD-123456789" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" defaultValue="Clinical Psychology, Anxiety Disorders" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Professional Details</CardTitle>
              <CardDescription>Your professional credentials and experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" defaultValue="12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input id="institution" defaultValue="Nirvaha Mental Health Center" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <textarea 
                  id="bio" 
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="Experienced clinical psychologist specializing in anxiety disorders and stress management. Passionate about helping individuals achieve mental wellness through evidence-based therapeutic approaches."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {currentRole === 'doctor' && (
          <TabsContent value="availability" className="space-y-6">
            <DoctorAvailability />
          </TabsContent>
        )}

        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-secondary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Control when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Appointment Reminders</Label>
                  <p className="text-sm text-muted-foreground">Get notified before upcoming appointments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Patient Messages</Label>
                  <p className="text-sm text-muted-foreground">Notifications for new patient messages</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">System Updates</Label>
                  <p className="text-sm text-muted-foreground">Important platform updates and announcements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Wellness Alerts</Label>
                  <p className="text-sm text-muted-foreground">Alerts for patients requiring attention</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-warning" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Change Password</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline" className="w-fit">Update Password</Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Session Management</Label>
                  <p className="text-sm text-muted-foreground">Manage active sessions and devices</p>
                </div>
                <Button variant="outline">View Sessions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-accent-foreground" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize your dashboard appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label className="text-base">Dashboard Layout</Label>
                <p className="text-sm text-muted-foreground mb-4">Choose your preferred dashboard layout</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-smooth">
                    <div className="aspect-video bg-muted rounded mb-2"></div>
                    <p className="text-sm font-medium">Compact</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-smooth border-primary">
                    <div className="aspect-video bg-primary/10 rounded mb-2"></div>
                    <p className="text-sm font-medium">Standard</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-muted-foreground" />
                Data Management
              </CardTitle>
              <CardDescription>Export, backup, and manage your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Export Data</Label>
                  <p className="text-sm text-muted-foreground">Download a copy of your data</p>
                </div>
                <Button variant="outline">Export</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Data Retention</Label>
                  <p className="text-sm text-muted-foreground">Manage how long data is stored</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Privacy Settings</Label>
                  <p className="text-sm text-muted-foreground">Control data sharing and privacy</p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base text-destructive">Delete Account</Label>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                </div>
                <Button variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;