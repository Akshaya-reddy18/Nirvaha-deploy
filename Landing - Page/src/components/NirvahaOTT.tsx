import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Brain,
  Heart,
  Users,
  Play,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Star
} from "lucide-react";

const NirvahaOTT = () => {
  const ottContent = [
    {
      category: "Mental Wellness",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
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
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
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
      color: "from-cyan-500 to-emerald-500",
      bgColor: "from-cyan-50 to-emerald-50",
      borderColor: "border-cyan-200",
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
  

  // Flatten items across categories into a simple card list
  const flatItems = useMemo(() => {
    const items: any[] = [];
    ottContent.forEach((cat) => {
      cat.content.forEach((c: any, idx: number) => {
        items.push({
          ...c,
          category: cat.category,
          icon: cat.icon,
          color: cat.color,
          borderColor: cat.borderColor,
        });
      });
    });
    return items;
  }, [ottContent]);

  // Ensure we have at least 7 items to display; repeat if necessary
  const displayCount = 7;
  const displayItems = useMemo(() => {
    const out: any[] = [];
    let i = 0;
    while (out.length < displayCount) {
      out.push(flatItems[i % flatItems.length]);
      i++;
    }
    return out;
  }, [flatItems]);

  // Duplicate the sequence for seamless marquee effect
  const trackItems = useMemo(() => [...displayItems, ...displayItems], [displayItems]);

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFF7E3 0%, #FFFFFF 100%)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle temple-like texture could be applied via CSS/asset (placeholder aura) */}
      
  <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></div>
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-6 py-2 text-sm font-semibold shadow-lg">
              Nirvaha OTT
            </Badge>
            <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full ml-3 animate-pulse"></div>
          </div>
          
          <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-[#0A0F0F] mb-3">Spiritual OTT</h2>
          
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-6">
            Wellness Content Library
          </h3>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed">
            Spiritual and mythological content inspired by Ramayana, Mahabharata, and more
          </p>
        </div>

        {/* Marquee-style floating cards (continuous roll right->left). Pause on hover. */}
        <div className="mt-8">
          <div className="marquee-viewport">
            <div
              className={`marquee-track ${isPaused ? 'paused' : ''}`}
              style={{ ['--marquee-duration' as any]: '24s' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {trackItems.map((item, idx) => (
                <div key={`${item.title}-${idx}`} className="marquee-item">
                  <Card className={`shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/90 backdrop-blur-sm border ${item.borderColor} hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden`}>
                    <CardHeader className="text-center pb-4 relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-[#0A0F0F]">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-800 text-md leading-tight mb-2">{item.title}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-gray-600">{item.type}</div>
                        <div className="text-sm text-yellow-700 font-semibold">{item.rating}</div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.description}</p>
                      <Button size="sm" className={`w-full bg-gradient-to-r ${item.color} text-white border-0 font-semibold py-2 rounded-xl shadow transition-all` }>
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OTT Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <Play className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">On-Demand Access</h4>
            <p className="text-gray-600 text-lg leading-relaxed">Learn at your own pace with 24/7 access to all content</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">Expert-Curated</h4>
            <p className="text-gray-600 text-lg leading-relaxed">Content created by certified wellness professionals and therapists</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <Headphones className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors">Multi-Format</h4>
            <p className="text-gray-600 text-lg leading-relaxed">Videos, audio guides, and interactive courses for every learning style</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NirvahaOTT;
