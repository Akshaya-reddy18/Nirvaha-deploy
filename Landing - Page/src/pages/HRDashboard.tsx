import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  Activity, 
  AlertTriangle,
  Calendar,
  BarChart3,
  Heart,
  Shield
} from "lucide-react";
import { useRole } from "../contexts/RoleContext";

const HRDashboard = () => {
  const { setCurrentRole } = useRole();

  useEffect(() => {
    setCurrentRole('hr');
  }, [setCurrentRole]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">HR Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor employee wellness and engagement metrics</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="justify-center">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Program
          </Button>
          <Button size="sm" className="justify-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Active Employees</p>
                <p className="text-xl lg:text-2xl font-bold">1,247</p>
                <p className="text-xs text-metric-excellent">89% engagement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-secondary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Wellness Score</p>
                <p className="text-xl lg:text-2xl font-bold">7.8</p>
                <p className="text-xs text-metric-good">+0.3 this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-warning" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">Program Usage</p>
                <p className="text-xl lg:text-2xl font-bold">73%</p>
                <p className="text-xs text-metric-good">+8% this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-metric-excellent" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground truncate">ROI</p>
                <p className="text-xl lg:text-2xl font-bold">324%</p>
                <p className="text-xs text-metric-excellent">Above target</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Employee Wellness Overview */}
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Employee Wellness Overview
            </CardTitle>
            <CardDescription>Current wellness metrics across the organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Stress Management</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Work-Life Balance</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Mental Health Support</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Program Satisfaction</span>
                    <span className="text-sm font-medium">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Absenteeism Reduction</span>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Employee Retention</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="border-t pt-4">
              <h4 className="font-medium text-sm mb-3">Department Wellness Scores</h4>
              <div className="space-y-2">
                {[
                  { dept: "Engineering", score: 8.2, trend: "up" },
                  { dept: "Marketing", score: 7.9, trend: "up" },
                  { dept: "Sales", score: 7.1, trend: "down" },
                  { dept: "Support", score: 8.5, trend: "up" },
                  { dept: "Operations", score: 7.6, trend: "stable" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded text-sm">
                    <span className="font-medium">{item.dept}</span>
                    <div className="flex items-center gap-2">
                      <span>{item.score}/10</span>
                      <Badge variant={item.trend === 'up' ? 'default' : item.trend === 'down' ? 'destructive' : 'secondary'} className="text-xs">
                        {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Risk Assessment
            </CardTitle>
            <CardDescription>Employees requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <span className="text-sm">High Risk</span>
                </div>
                <span className="font-medium">12</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span className="text-sm">Medium Risk</span>
                </div>
                <span className="font-medium">34</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-metric-good"></div>
                  <span className="text-sm">Low Risk</span>
                </div>
                <span className="font-medium">1,201</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Action Required
              </h4>
              <div className="space-y-2">
                <div className="text-xs p-2 bg-destructive/10 border border-destructive/20 rounded">
                  <p className="font-medium text-destructive">3 employees with extended absence</p>
                  <Button variant="outline" size="sm" className="mt-2 text-xs h-6">
                    Review Cases
                  </Button>
                </div>
                <div className="text-xs p-2 bg-warning/10 border border-warning/20 rounded">
                  <p className="font-medium text-warning">Low engagement in Marketing dept</p>
                  <Button variant="outline" size="sm" className="mt-2 text-xs h-6">
                    Schedule Check-in
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;
