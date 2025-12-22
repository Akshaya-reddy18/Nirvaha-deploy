import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Search,
  Plus,
  Filter,
  Users,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const appointments = [
    { id: 1, time: "09:00 AM", patient: "Sarah Johnson", type: "Initial Consultation", status: "confirmed", duration: "50 min", date: "Today" },
    { id: 2, time: "10:30 AM", patient: "Michael Chen", type: "Follow-up", status: "in-progress", duration: "45 min", date: "Today" },
    { id: 3, time: "02:00 PM", patient: "Emma Davis", type: "Therapy Session", status: "confirmed", duration: "60 min", date: "Today" },
    { id: 4, time: "03:30 PM", patient: "Robert Wilson", type: "Medication Review", status: "confirmed", duration: "30 min", date: "Today" },
    { id: 5, time: "09:00 AM", patient: "Lisa Park", type: "Group Therapy", status: "confirmed", duration: "90 min", date: "Tomorrow" },
    { id: 6, time: "11:00 AM", patient: "Tom Anderson", type: "Initial Consultation", status: "pending", duration: "50 min", date: "Tomorrow" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-metric-excellent text-white">Confirmed</Badge>;
      case "in-progress":
        return <Badge className="bg-primary text-white">In Progress</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground mt-1">Manage your patient appointments and schedule</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Today's Appointments</p>
                <p className="text-xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Next Appointment</p>
                <p className="text-xl font-bold">2:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-metric-excellent" />
              <div>
                <p className="text-sm text-muted-foreground">Completed Today</p>
                <p className="text-xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients or appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Appointments Tabs */}
      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.filter(apt => apt.date === "Today").map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-primary">{appointment.time}</div>
                        <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{appointment.patient}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(appointment.status)}
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.filter(apt => apt.date === "Tomorrow").map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-primary">{appointment.time}</div>
                        <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                        <div className="text-xs text-muted-foreground">{appointment.date}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{appointment.patient}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(appointment.status)}
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-metric-excellent" />
                Past Appointments
              </CardTitle>
              <CardDescription>Completed and cancelled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No past appointments to display</p>
                <p className="text-sm">Completed appointments will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-foreground" />
                All Appointments
              </CardTitle>
              <CardDescription>Complete appointment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-primary">{appointment.time}</div>
                        <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                        <div className="text-xs text-muted-foreground">{appointment.date}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{appointment.patient}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(appointment.status)}
                      <Button variant="outline" size="sm">
                        {appointment.status === "in-progress" ? "Join" : "View"}
                      </Button>
                    </div>
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

export default Appointments;