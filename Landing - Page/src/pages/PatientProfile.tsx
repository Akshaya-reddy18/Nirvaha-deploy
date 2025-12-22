import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  User, 
  Calendar, 
  Activity,
  FileText,
  TrendingUp,
  Heart,
  Phone,
  Mail
} from "lucide-react";

const PatientProfile = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Patient Header */}
      <div className="flex items-start space-x-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="text-xl">SJ</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Sarah Johnson</h1>
              <p className="text-muted-foreground">Patient ID: {id || "001"}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">sarah.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-metric-good text-white">Active Patient</Badge>
              <Button>Schedule Appointment</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
                <p className="text-xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Wellness Score</p>
                <p className="text-xl font-bold">8.2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-metric-excellent" />
              <div>
                <p className="text-sm text-muted-foreground">Progress</p>
                <p className="text-xl font-bold">85%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Last Session</p>
                <p className="text-xl font-bold">2 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">34 years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">Female</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">March 15, 1989</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Contact</p>
                    <p className="font-medium">John Johnson (Spouse)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Current Treatment Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weekly Therapy Sessions</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Daily Meditation (15 min)</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sound Healing (2x/week)</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Discussion Group Participation</span>
                  <Badge variant="secondary">Recommended</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Session History</CardTitle>
              <CardDescription>Recent therapy sessions and appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2024-01-15", type: "Individual Therapy", duration: "50 min", status: "Completed", notes: "Great progress on anxiety management" },
                  { date: "2024-01-08", type: "Group Session", duration: "60 min", status: "Completed", notes: "Active participation in group discussion" },
                  { date: "2024-01-01", type: "Individual Therapy", duration: "50 min", status: "Completed", notes: "Discussed coping strategies" },
                ].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{session.type}</p>
                      <p className="text-sm text-muted-foreground">{session.date} • {session.duration}</p>
                      <p className="text-sm text-muted-foreground">{session.notes}</p>
                    </div>
                    <Badge variant="secondary">{session.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Wellness Metrics</CardTitle>
              <CardDescription>Patient wellness tracking and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Anxiety Level</span>
                    <span className="text-sm text-muted-foreground">3/10 (Improved)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-metric-good h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Depression Score</span>
                    <span className="text-sm text-muted-foreground">2/10 (Stable)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-metric-excellent h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Sleep Quality</span>
                    <span className="text-sm text-muted-foreground">8/10 (Good)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-metric-excellent h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Treatment Plan Details</CardTitle>
              <CardDescription>Comprehensive treatment strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Primary Goals</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Reduce anxiety symptoms to manageable levels</li>
                    <li>Develop healthy coping mechanisms</li>
                    <li>Improve sleep quality and routine</li>
                    <li>Build confidence in social situations</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Recommended Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="justify-center">ZenChat Sessions</Badge>
                    <Badge className="justify-center">Guided Meditation</Badge>
                    <Badge className="justify-center">Sound Healing</Badge>
                    <Badge className="justify-center">Mindfulness Events</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Session Notes</CardTitle>
              <CardDescription>Clinical notes and observations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2024-01-15", note: "Patient showed significant improvement in managing anxiety triggers. Discussed workplace stress management techniques. Homework: Practice breathing exercises daily." },
                  { date: "2024-01-08", note: "Good engagement in group therapy. Patient shared personal experiences and offered support to others. Positive peer interaction observed." },
                  { date: "2024-01-01", note: "Initial assessment completed. Patient presents with moderate anxiety and mild depression. Recommended comprehensive treatment plan including individual therapy and wellness services." }
                ].map((note, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{note.date}</span>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">{note.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientProfile;