"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BookOpen, Play, Download, Clock, Star, Users, Search } from "lucide-react"

const educationContent = [
  {
    id: "edu1abc",
    title: "Nutrition During Pregnancy",
    description: "Essential nutrients, meal planning, and foods to avoid during pregnancy",
    type: "article",
    duration: "8 min read",
    category: "nutrition",
    rating: 4.8,
    views: 1247,
    tags: ["nutrition", "diet", "vitamins", "health"]
  },
  {
    id: "edu1def",
    title: "Exercise Guidelines for Expecting Mothers",
    description: "Safe exercises, routines, and physical activities during each trimester",
    type: "video",
    duration: "15 min watch",
    category: "fitness",
    rating: 4.9,
    views: 2103,
    tags: ["exercise", "fitness", "trimester", "safety"]
  },
  {
    id: "edu1ghi",
    title: "Understanding Fetal Development",
    description: "Week-by-week guide to your baby's growth and development milestones",
    type: "guide",
    duration: "12 min read",
    category: "development",
    rating: 4.7,
    views: 1856,
    tags: ["development", "fetus", "milestones", "weeks"]
  },
  {
    id: "edu1jkl",
    title: "Preparing for Labor and Delivery",
    description: "Birth plans, pain management options, and what to expect during labor",
    type: "course",
    duration: "45 min course",
    category: "birth",
    rating: 4.9,
    views: 934,
    tags: ["labor", "delivery", "birth-plan", "hospital"]
  },
  {
    id: "edu1mno",
    title: "Mental Health During Pregnancy",
    description: "Managing stress, anxiety, and emotional changes throughout pregnancy",
    type: "article",
    duration: "6 min read",
    category: "mental-health",
    rating: 4.6,
    views: 1523,
    tags: ["mental-health", "stress", "anxiety", "emotional"]
  },
  {
    id: "edu1pqr",
    title: "Breastfeeding Basics",
    description: "Getting started with breastfeeding, positions, and common challenges",
    type: "video",
    duration: "20 min watch",
    category: "breastfeeding",
    rating: 4.8,
    views: 1674,
    tags: ["breastfeeding", "nursing", "baby-care", "feeding"]
  }
]

const categories = [
  "All", "Nutrition", "Fitness", "Development", "Birth", "Mental Health", "Breastfeeding"
]

export default function EducationPage() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />
      case 'article': return <BookOpen className="w-4 h-4" />
      case 'guide': return <BookOpen className="w-4 h-4" />
      case 'course': return <Play className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700'
      case 'article': return 'bg-blue-100 text-blue-700'
      case 'guide': return 'bg-green-100 text-green-700'
      case 'course': return 'bg-purple-100 text-purple-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  return (
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Pregnancy Education</h1>
              <p className="text-muted-foreground">Learn everything you need for a healthy pregnancy journey</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
              <Button size="lg" className="rounded-full">
                <Download className="w-5 h-5 mr-2" />
                My Library
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <BookOpen className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{educationContent.length}</div>
            <div className="text-sm text-muted-foreground">Educational Resources</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">{educationContent.filter(c => c.type === 'video').length}</div>
            <div className="text-sm text-muted-foreground">Video Lessons</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-green-50 to-emerald-50 border-green-200">
            <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-purple-50 to-pink-50 border-purple-200">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">9.3K</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </Card>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getTypeColor(content.type)}>
                      {getTypeIcon(content.type)}
                      <span className="ml-2 capitalize">{content.type}</span>
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {content.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.views.toLocaleString()} views
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">
                    {content.type === 'video' || content.type === 'course' ? 'Watch Now' : 'Read Now'}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <Card className="p-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">📚 Recommended Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1f4b4a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">First Trimester</h4>
              <p className="text-sm text-muted-foreground">Nutrition basics, prenatal vitamins, and early pregnancy care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2d6a68] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Second Trimester</h4>
              <p className="text-sm text-muted-foreground">Exercise routines, fetal development, and preparing for birth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3d7a78] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Third Trimester</h4>
              <p className="text-sm text-muted-foreground">Labor preparation, breastfeeding, and newborn care basics</p>
            </div>
          </div>
        </Card>
      </div>
  )
}