import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { 
  Heart, 
  Calendar, 
  Users, 
  Activity, 
  TrendingUp, 
  MessageSquare,
  Clock,
  Star
} from "lucide-react";
import { useRole } from "../contexts/RoleContext";

const DoctorDashboard = () => {
  const { setCurrentRole } = useRole();

  useEffect(() => {
    setCurrentRole('doctor');
  }, [setCurrentRole]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Doctor Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor patient wellness and manage appointments</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="justify-center">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button size="sm" className="justify-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            New Session
          </Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Active Patients</p>
                <p className="text-xl lg:text-2xl font-bold">127</p>
                <p className="text-xs text-metric-excellent">+12% this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-secondary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Today's Sessions</p>
                <p className="text-xl lg:text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">3 remaining</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-warning" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Avg Rating</p>
                <p className="text-xl lg:text-2xl font-bold">4.8</p>
                <p className="text-xs text-metric-good">+0.2 this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-metric-excellent" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Response Rate</p>
                <p className="text-xl lg:text-2xl font-bold">94%</p>
                <p className="text-xs text-metric-excellent">Excellent</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Today's Schedule */}
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Upcoming appointments and sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { time: "09:00 AM", patient: "Sarah Johnson", type: "Initial Consultation", status: "confirmed" },
              { time: "10:30 AM", patient: "Michael Chen", type: "Follow-up", status: "confirmed" },
              { time: "02:00 PM", patient: "Emma Wilson", type: "Therapy Session", status: "pending" },
              { time: "03:30 PM", patient: "David Brown", type: "Assessment", status: "confirmed" },
              { time: "04:30 PM", patient: "Lisa Garcia", type: "Check-in", status: "confirmed" }
            ].map((appointment, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-muted/30 rounded-lg space-y-2 sm:space-y-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{appointment.time}</span>
                    <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'} className="text-xs">
                      {appointment.status}
                    </Badge>
                  </div>
                  <p className="font-semibold text-sm truncate">{appointment.patient}</p>
                  <p className="text-xs text-muted-foreground">{appointment.type}</p>
                </div>
                <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Patient Wellness Overview */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Wellness Trends
            </CardTitle>
            <CardDescription>Patient progress overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Overall Improvement</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Session Completion</span>
                <span className="text-sm font-medium">91%</span>
              </div>
              <Progress value={91} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Patient Satisfaction</span>
                <span className="text-sm font-medium">96%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium text-sm mb-3">Recent Feedback</h4>
              <div className="space-y-2">
                <div className="text-xs p-2 bg-muted/30 rounded">
                  <p className="font-medium">"Very helpful session"</p>
                  <p className="text-muted-foreground">- Sarah J.</p>
                </div>
                <div className="text-xs p-2 bg-muted/30 rounded">
                  <p className="font-medium">"Feeling much better"</p>
                  <p className="text-muted-foreground">- Michael C.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
