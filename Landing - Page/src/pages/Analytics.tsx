import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity,
  Calendar,
  Download
} from "lucide-react";
import { Button } from "../components/ui/button";

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">Comprehensive wellness insights and metrics</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Sessions</span>
                  <span className="font-bold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Users</span>
                  <span className="font-bold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg. Session Rating</span>
                  <span className="font-bold">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completion Rate</span>
                  <span className="font-bold">89%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Growth</span>
                  <Badge className="bg-metric-excellent text-white">+15%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Engagement</span>
                  <Badge className="bg-metric-good text-white">+8%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Satisfaction</span>
                  <Badge className="bg-metric-excellent text-white">+12%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Retention</span>
                  <Badge className="bg-metric-good text-white">+5%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-warning" />
                  Wellness Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Stress Reduction</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Sleep Improvement</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Mood Enhancement</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Service Utilization</CardTitle>
                <CardDescription>Usage across different wellness services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { service: "ZenChat", usage: 65, users: 810 },
                  { service: "Guided Meditation", usage: 58, users: 723 },
                  { service: "Discussion Rooms", usage: 42, users: 524 },
                  { service: "Sound Healing", usage: 35, users: 437 },
                  { service: "Wellness Events", usage: 28, users: 349 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.service}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{item.users} users</span>
                        <span className="text-sm font-bold">{item.usage}%</span>
                      </div>
                    </div>
                    <Progress value={item.usage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Wellness Score Distribution</CardTitle>
                <CardDescription>Overall wellness scores across user base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-metric-excellent"></div>
                      <span className="text-sm">Excellent (8-10)</span>
                    </div>
                    <span className="font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-metric-good"></div>
                      <span className="text-sm">Good (6-7)</span>
                    </div>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-metric-moderate"></div>
                      <span className="text-sm">Moderate (4-5)</span>
                    </div>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-metric-poor"></div>
                      <span className="text-sm">Poor (2-3)</span>
                    </div>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Active Users</p>
                    <p className="text-xl font-bold">892</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Session Duration</p>
                    <p className="text-xl font-bold">24 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-warning" />
                  <div>
                    <p className="text-sm text-muted-foreground">Return Rate</p>
                    <p className="text-xl font-bold">78%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-metric-excellent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Growth Rate</p>
                    <p className="text-xl font-bold">+15%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Wellness Outcomes</CardTitle>
              <CardDescription>Measured improvements in mental health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-metric-excellent mb-2">78%</div>
                  <p className="text-sm text-muted-foreground">Stress Reduction</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-metric-good mb-2">65%</div>
                  <p className="text-sm text-muted-foreground">Sleep Quality Improvement</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-metric-excellent mb-2">82%</div>
                  <p className="text-sm text-muted-foreground">Mood Enhancement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Trending Insights</CardTitle>
              <CardDescription>Key trends and patterns in wellness data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Peak Usage Times</h4>
                  <p className="text-sm text-muted-foreground">Most sessions occur between 7-9 PM, with secondary peak at lunch hours (12-1 PM)</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Popular Service Combinations</h4>
                  <p className="text-sm text-muted-foreground">Users combining ZenChat with meditation show 23% better wellness outcomes</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Seasonal Patterns</h4>
                  <p className="text-sm text-muted-foreground">Increased demand for stress management services during Q4 and January</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;