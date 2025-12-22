import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Brain,
  Heart,
  Users,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Star
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "Doctor Dashboard",
      description: "Comprehensive patient management with appointment scheduling, wellness tracking, and treatment analytics.",
      benefits: ["Real-time patient monitoring", "Treatment plan management", "Risk assessment tools"]
    },
    {
      icon: Users,
      title: "HR Dashboard",
      description: "Employee wellness analytics, program effectiveness measurement, and population health insights.",
      benefits: ["Wellness ROI tracking", "Risk identification", "Compliance monitoring"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for informed decision making and measurable wellness outcomes.",
      benefits: ["Predictive analytics", "Custom reporting", "Trend analysis"]
    }
  ];

  const services = [
    "ZenChat Therapy Sessions",
    "Guided Meditation Programs",
    "Sound Healing Treatments",
    "Discussion Room Communities",
    "Wellness Events & Workshops",
    "Mental Health Marketplace"
  ];

  const ottContent = [
    {
      category: "Mental Wellness",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      content: [
        {
          title: "Mindfulness Mastery",
          type: "Video Series",
          duration: "45 min",
          rating: 4.9,
          description: "Complete guide to mindfulness practices and meditation techniques"
        },
        {
          title: "Stress Management Toolkit",
          type: "Interactive Course",
          duration: "2 hours",
          rating: 4.8,
          description: "Practical strategies for managing stress and building resilience"
        },
        {
          title: "Anxiety Relief Sessions",
          type: "Audio Series",
          duration: "30 min",
          rating: 4.9,
          description: "Guided sessions to help manage anxiety and panic attacks"
        }
      ]
    },
    {
      category: "Personal Wellness",
      icon: Heart,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      content: [
        {
          title: "Sleep Optimization",
          type: "Video Course",
          duration: "1.5 hours",
          rating: 4.7,
          description: "Science-based techniques for better sleep and rest"
        },
        {
          title: "Nutrition for Mental Health",
          type: "Interactive Guide",
          duration: "1 hour",
          rating: 4.8,
          description: "How nutrition affects your mental wellbeing"
        },
        {
          title: "Daily Wellness Routines",
          type: "Audio Collection",
          duration: "20 min",
          rating: 4.9,
          description: "Morning and evening routines for optimal wellness"
        }
      ]
    },
    {
      category: "Professional Development",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      content: [
        {
          title: "Workplace Wellness",
          type: "Video Series",
          duration: "3 hours",
          rating: 4.8,
          description: "Building healthy work environments and managing work stress"
        },
        {
          title: "Leadership & Mental Health",
          type: "Interactive Course",
          duration: "2.5 hours",
          rating: 4.9,
          description: "Leading with empathy and supporting team mental health"
        },
        {
          title: "Burnout Prevention",
          type: "Audio Guide",
          duration: "40 min",
          rating: 4.7,
          description: "Recognizing and preventing professional burnout"
        }
      ]
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "78%", label: "Wellness Improvement" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-calm-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-5xl font-bold bg-wellness-gradient bg-clip-text text-transparent">
              Nirvaha
            </h1>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mental Wellness
            <span className="block text-primary">Dashboard Platform</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering healthcare professionals and HR teams with sophisticated analytics,
            real-time insights, and comprehensive wellness management tools for measurable mental health outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark transition-smooth text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Access Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Professional Dashboards
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Wellness Management
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for healthcare professionals and HR teams to deliver effective mental wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Integrated Services
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Wellness Ecosystem
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrated services tracked and managed through intelligent dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wellness-gradient rounded-full mr-3 group-hover:scale-110 transition-smooth"></div>
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nirvaha OTT Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Nirvaha OTT
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wellness Content Library
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access curated mental wellness and personal development content designed to support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ottContent.map((category, categoryIndex) => (
              <Card key={categoryIndex} className={`shadow-card hover:shadow-hover transition-smooth group bg-gradient-to-br ${category.bgColor} border-2 ${category.borderColor}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/70 rounded-xl p-4 hover:bg-white/90 transition-smooth group/item">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800 group-hover/item:text-gray-900 transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1">
                          {item.type.includes('Video') && <Video className="h-4 w-4 text-blue-500" />}
                          {item.type.includes('Audio') && <Headphones className="h-4 w-4 text-green-500" />}
                          {item.type.includes('Interactive') && <BookOpen className="h-4 w-4 text-purple-500" />}
                          <span className="text-sm text-gray-600">{item.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      
                      <Button 
                        size="sm" 
                        className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0`}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Learning
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* OTT Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">On-Demand Access</h4>
              <p className="text-gray-600">Learn at your own pace with 24/7 access to all content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert-Curated</h4>
              <p className="text-gray-600">Content created by certified wellness professionals and therapists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Multi-Format</h4>
              <p className="text-gray-600">Videos, audio guides, and interactive courses for every learning style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-warning mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Enterprise Security</h3>
              {/* <p className="text-muted-foreground">HIPAA compliant with advanced data protection</p> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-metric-excellent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-metric-excellent" />
              </div>
              {/* <h4 className="font-semibold text-foreground mb-2">HIPAA Compliant</h4> */}
              <p className="text-sm text-muted-foreground">Full healthcare data protection compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Real-time Encryption</h4>
              <p className="text-sm text-muted-foreground">End-to-end encrypted data transmission</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Advanced Analytics</h4>
              <p className="text-sm text-muted-foreground">Privacy-first data insights and reporting</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold bg-wellness-gradient bg-clip-text text-transparent">
              Nirvaha
            </span>
          </div>
          <p className="text-muted-foreground">
            Empowering mental wellness through intelligent dashboards and data-driven insights
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;