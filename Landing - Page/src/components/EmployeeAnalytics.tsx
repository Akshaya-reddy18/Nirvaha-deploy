import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useQuery } from "@tanstack/react-query";
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Heart,
  Brain,
  Moon,
  Briefcase,
  Search,
  ChevronRight
} from "lucide-react";
import { Progress } from "./ui/progress";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  joinDate: string;
}

interface WellnessMetrics {
  id: number;
  employeeId: number;
  date: string;
  stressLevel: number | null;
  sleepQuality: number | null;
  moodRating: number | null;
  workLifeBalance: number | null;
  productivityScore: number | null;
  engagementLevel: number | null;
  sessionCount: number | null;
  sessionDuration: number | null;
}

const EmployeeAnalytics = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");

  // Fetch all employees
  const { data: employees = [], isLoading: loadingEmployees } = useQuery<Employee[]>({
    queryKey: ['https://nirvaha-backend.onrender.com/api/employees'],
    initialData: [],
  });

  // Fetch wellness metrics for selected employee
  const { data: wellnessMetrics = [], isLoading: loadingMetrics } = useQuery<WellnessMetrics[]>({
    queryKey: [`https://nirvaha-backend.onrender.com/api/employees/${selectedEmployee}/wellness-metrics`],
    enabled: !!selectedEmployee,
    initialData: [],
  });

  // Filter employees based on search and department
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || emp.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  // Get unique departments
  const departments = Array.from(new Set(employees.map(emp => emp.department)));

  // Calculate wellness metrics averages
  const calculateAverage = (field: keyof WellnessMetrics) => {
    const validMetrics = wellnessMetrics
      .map(m => m[field])
      .filter((value): value is number => value !== null && typeof value === 'number');
    
    if (validMetrics.length === 0) return 0;
    return validMetrics.reduce((sum, val) => sum + val, 0) / validMetrics.length;
  };

  const getScoreColor = (score: number) => {
    if (score >= 7) return "text-metric-excellent";
    if (score >= 5) return "text-metric-good";
    return "text-warning";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 7) return "bg-metric-excellent";
    if (score >= 5) return "bg-metric-good";
    return "bg-warning";
  };

  const getTrendIcon = (score: number) => {
    if (score >= 6) return <TrendingUp className="h-4 w-4 text-metric-excellent" />;
    return <TrendingDown className="h-4 w-4 text-warning" />;
  };

  const selectedEmployeeData = employees.find(emp => emp.id === selectedEmployee);

  if (loadingEmployees) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Employee Analytics</h1>
          <p className="text-muted-foreground mt-1">Individual wellness insights and metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        {/* Employee List */}
        <Card className="shadow-card xl:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-primary" />
              Employee Directory
            </CardTitle>
            <CardDescription className="text-sm">Select an employee to view their wellness analytics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-4 pt-0">
            {/* Search and Filter */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Employee List */}
            <div className="space-y-2 max-h-64 sm:max-h-96 overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors border ${
                    selectedEmployee === employee.id
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted/50 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{employee.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{employee.position}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {employee.department}
                      </Badge>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </div>
              ))}
              
              {filteredEmployees.length === 0 && (
                <p className="text-center text-muted-foreground py-4">No employees found</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Dashboard */}
        <div className="xl:col-span-2 space-y-4 lg:space-y-6">
          {selectedEmployee ? (
            <>
              {/* Employee Header */}
              <Card className="shadow-card">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold truncate">{selectedEmployeeData?.name}</h2>
                      <p className="text-muted-foreground truncate">{selectedEmployeeData?.position}</p>
                      <p className="text-sm text-muted-foreground truncate">{selectedEmployeeData?.email}</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary self-start sm:self-center flex-shrink-0">
                      {selectedEmployeeData?.department}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {loadingMetrics ? (
                <div className="animate-pulse space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-32 bg-muted rounded"></div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Wellness Metrics Overview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Brain className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Stress Level</p>
                              <p className={`text-xl font-bold ${getScoreColor(10 - calculateAverage('stressLevel'))}`}>
                                {(10 - calculateAverage('stressLevel')).toFixed(1)}/10
                              </p>
                            </div>
                          </div>
                          {getTrendIcon(10 - calculateAverage('stressLevel'))}
                        </div>
                        <Progress 
                          value={(10 - calculateAverage('stressLevel')) * 10} 
                          className="mt-2 h-2"
                        />
                      </CardContent>
                    </Card>

                    <Card className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Moon className="h-5 w-5 text-secondary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Sleep Quality</p>
                              <p className={`text-xl font-bold ${getScoreColor(calculateAverage('sleepQuality'))}`}>
                                {calculateAverage('sleepQuality').toFixed(1)}/10
                              </p>
                            </div>
                          </div>
                          {getTrendIcon(calculateAverage('sleepQuality'))}
                        </div>
                        <Progress 
                          value={calculateAverage('sleepQuality') * 10} 
                          className="mt-2 h-2"
                        />
                      </CardContent>
                    </Card>

                    <Card className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Heart className="h-5 w-5 text-warning" />
                            <div>
                              <p className="text-sm text-muted-foreground">Mood Rating</p>
                              <p className={`text-xl font-bold ${getScoreColor(calculateAverage('moodRating'))}`}>
                                {calculateAverage('moodRating').toFixed(1)}/10
                              </p>
                            </div>
                          </div>
                          {getTrendIcon(calculateAverage('moodRating'))}
                        </div>
                        <Progress 
                          value={calculateAverage('moodRating') * 10} 
                          className="mt-2 h-2"
                        />
                      </CardContent>
                    </Card>

                    <Card className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-5 w-5 text-metric-excellent" />
                            <div>
                              <p className="text-sm text-muted-foreground">Work-Life Balance</p>
                              <p className={`text-xl font-bold ${getScoreColor(calculateAverage('workLifeBalance'))}`}>
                                {calculateAverage('workLifeBalance').toFixed(1)}/10
                              </p>
                            </div>
                          </div>
                          {getTrendIcon(calculateAverage('workLifeBalance'))}
                        </div>
                        <Progress 
                          value={calculateAverage('workLifeBalance') * 10} 
                          className="mt-2 h-2"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Engagement & Productivity */}
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Engagement & Productivity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">Productivity Score</p>
                          <div className={`text-3xl font-bold ${getScoreColor(calculateAverage('productivityScore'))}`}>
                            {calculateAverage('productivityScore').toFixed(1)}
                          </div>
                          <Progress 
                            value={calculateAverage('productivityScore') * 10} 
                            className="mt-2"
                          />
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">Engagement Level</p>
                          <div className={`text-3xl font-bold ${getScoreColor(calculateAverage('engagementLevel'))}`}>
                            {calculateAverage('engagementLevel').toFixed(1)}
                          </div>
                          <Progress 
                            value={calculateAverage('engagementLevel') * 10} 
                            className="mt-2"
                          />
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">Avg. Session Duration</p>
                          <div className="text-3xl font-bold text-primary">
                            {calculateAverage('sessionDuration').toFixed(0)}min
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {calculateAverage('sessionCount').toFixed(1)} sessions/week
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </>
          ) : (
            <Card className="shadow-card">
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-muted-foreground">Select an Employee</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose an employee from the directory to view their wellness analytics
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeAnalytics;