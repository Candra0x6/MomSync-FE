"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BookOpen, Plus, Calendar, Heart, Baby } from "lucide-react"

const journalEntries = [
  {
    id: "je1abc",
    date: "2024-10-28T10:30:00Z",
    title: "Feeling Great Today!",
    content: "Had an amazing morning! Baby was very active during breakfast. No morning sickness today. Doctor visit went well yesterday - everything looks perfect.",
    mood: "happy",
    symptoms: ["Active baby movements", "Good appetite"],
    tags: ["wellness", "baby-activity"],
  },
  {
    id: "je1def", 
    date: "2024-10-27T14:20:00Z",
    title: "Doctor Visit Update",
    content: "Had my routine checkup today. Blood pressure is perfect. Baby's heartbeat is strong and steady. Got to see baby on ultrasound - so amazing!",
    mood: "content",
    symptoms: ["Slight fatigue"],
    tags: ["doctor-visit", "checkup"],
  }
]

export default function JournalPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    })
  }

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'bg-green-100 text-green-700'
      case 'content': return 'bg-blue-100 text-blue-700'
      case 'peaceful': return 'bg-purple-100 text-purple-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Pregnancy Journal</h1>
              <p className="text-muted-foreground">Document your pregnancy journey and precious moments</p>
            </div>
            <Button size="lg" className="rounded-full">
              <Plus className="w-5 h-5 mr-2" />
              New Entry
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <BookOpen className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{journalEntries.length}</div>
            <div className="text-sm text-muted-foreground">Total Entries</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-pink-50 to-rose-50 border-pink-200">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-pink-600 mb-2">28</div>
            <div className="text-sm text-muted-foreground">Week of Pregnancy</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <Baby className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-sm text-muted-foreground">Weeks to Go</div>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Recent Entries</h2>
          
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(entry.date)}
                    </div>
                  </div>
                  <Badge className={getMoodColor(entry.mood)}>
                    {entry.mood}
                  </Badge>
                </div>

                <div className="mb-4">
                  <p className="text-foreground leading-relaxed">{entry.content}</p>
                </div>

                {entry.symptoms && entry.symptoms.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Symptoms & Notes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {entry.symptoms.map((symptom, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, idx) => (
                    <Badge key={idx} className="bg-[#1f4b4a]/10 text-[#1f4b4a] text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="p-8 mt-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">✨ Journaling Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Daily Moments</h4>
              <p className="text-sm text-muted-foreground mb-4">Record baby movements, cravings, and how you're feeling each day</p>
              <h4 className="font-semibold mb-2">Milestone Tracking</h4>
              <p className="text-sm text-muted-foreground">Document doctor visits, ultrasounds, and special pregnancy moments</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Emotional Journey</h4>
              <p className="text-sm text-muted-foreground mb-4">Write about your emotions, fears, excitement, and dreams for your baby</p>
              <h4 className="font-semibold mb-2">Future Memories</h4>
              <p className="text-sm text-muted-foreground">These entries will become precious memories to share with your child</p>
            </div>
          </div>
        </Card>
      </div>
  )
}