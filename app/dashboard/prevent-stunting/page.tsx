"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TrendingDown, AlertTriangle, Target, Scale, Apple, Activity, BookOpen, CheckCircle } from "lucide-react"

const stuntingData = {
  currentStatus: "normal",
  riskLevel: "low",
  lastMeasurement: {
    date: "2024-10-25",
    height: "5'4\"",
    weight: "145 lbs",
    bmi: 24.8,
    fundalHeight: "28 cm"
  },
  babyGrowth: {
    estimatedWeight: "2.5 lbs",
    length: "14.8 inches",
    percentile: "50th",
    developmentStage: "normal"
  }
}

const preventionTips = [
  {
    category: "Nutrition",
    icon: <Apple className="w-6 h-6" />,
    title: "Balanced Diet",
    description: "Consume adequate protein, iron, folate, and calcium daily",
    actions: [
      "Eat 3 meals + 2 healthy snacks daily",
      "Include lean proteins in every meal",
      "Take prenatal vitamins as prescribed",
      "Stay hydrated with 8-10 glasses of water"
    ]
  },
  {
    category: "Monitoring",
    icon: <Scale className="w-6 h-6" />,
    title: "Regular Check-ups",
    description: "Consistent prenatal care and growth monitoring",
    actions: [
      "Attend all scheduled prenatal appointments",
      "Monitor weight gain according to guidelines",
      "Track fundal height measurements",
      "Report any concerns immediately"
    ]
  },
  {
    category: "Lifestyle",
    icon: <Activity className="w-6 h-6" />,
    title: "Healthy Habits",
    description: "Maintain healthy lifestyle choices during pregnancy",
    actions: [
      "Get adequate sleep (7-9 hours nightly)",
      "Exercise regularly with doctor approval",
      "Avoid smoking and alcohol completely",
      "Manage stress through relaxation techniques"
    ]
  },
  {
    category: "Education",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge & Support",
    description: "Stay informed and seek support when needed",
    actions: [
      "Learn about proper nutrition during pregnancy",
      "Join prenatal classes and support groups",
      "Communicate openly with healthcare providers",
      "Access reliable pregnancy information sources"
    ]
  }
]

const nutritionPlan = [
  {
    nutrient: "Protein",
    dailyTarget: "75-100g",
    sources: ["Lean meats", "Fish", "Eggs", "Beans", "Dairy"],
    importance: "Essential for baby's tissue and organ development"
  },
  {
    nutrient: "Iron",
    dailyTarget: "27mg",
    sources: ["Red meat", "Spinach", "Lentils", "Fortified cereals"],
    importance: "Prevents anemia and supports baby's blood development"
  },
  {
    nutrient: "Folate",
    dailyTarget: "600mcg",
    sources: ["Leafy greens", "Citrus fruits", "Fortified grains"],
    importance: "Reduces risk of neural tube defects"
  },
  {
    nutrient: "Calcium",
    dailyTarget: "1000mg",
    sources: ["Dairy products", "Leafy greens", "Almonds"],
    importance: "Builds strong bones and teeth for baby"
  }
]

export default function StuntingPreventionPage() {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700'
      case 'moderate': return 'bg-yellow-100 text-yellow-700'
      case 'high': return 'bg-red-100 text-red-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-700'
      case 'concern': return 'bg-yellow-100 text-yellow-700'
      case 'risk': return 'bg-red-100 text-red-700'
      default: return 'bg-green-100 text-green-700'
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Growth & Development Monitoring</h1>
              <p className="text-muted-foreground">Prevent stunting and ensure healthy fetal development</p>
            </div>
            <Button size="lg" className="rounded-full">
              <Target className="w-5 h-5 mr-2" />
              Update Measurements
            </Button>
          </div>
        </motion.div>

        {/* Current Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <CheckCircle className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-xl font-bold text-[#1f4b4a] mb-2">Normal</div>
            <div className="text-sm text-muted-foreground">Current Status</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-green-50 to-emerald-50 border-green-200">
            <Scale className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-green-600 mb-2">Low Risk</div>
            <div className="text-sm text-muted-foreground">Stunting Risk</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <TrendingDown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-blue-600 mb-2">50th</div>
            <div className="text-sm text-muted-foreground">Growth Percentile</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-purple-50 to-pink-50 border-purple-200">
            <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-purple-600 mb-2">On Track</div>
            <div className="text-sm text-muted-foreground">Development</div>
          </Card>
        </div>

        {/* Current Measurements */}
        <Card className="p-6 mb-8 border-l-4 border-l-green-500">
          <h2 className="text-xl font-semibold mb-4">Latest Measurements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-lg font-bold text-green-700">145 lbs</div>
              <div className="text-sm text-muted-foreground">Weight</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-lg font-bold text-blue-700">28 cm</div>
              <div className="text-sm text-muted-foreground">Fundal Height</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-lg font-bold text-purple-700">2.5 lbs</div>
              <div className="text-sm text-muted-foreground">Baby Weight</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-lg font-bold text-orange-700">14.8 in</div>
              <div className="text-sm text-muted-foreground">Baby Length</div>
            </div>
          </div>
        </Card>

        {/* Prevention Strategies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Prevention Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preventionTips.map((tip, index) => (
              <motion.div
                key={tip.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#1f4b4a]/10 rounded-xl mr-4">
                      <div className="text-[#1f4b4a]">{tip.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tip.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nutrition Plan */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Daily Nutrition Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nutritionPlan.map((nutrient, index) => (
              <div key={nutrient.nutrient} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{nutrient.nutrient}</h3>
                  <Badge variant="outline">{nutrient.dailyTarget}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{nutrient.importance}</p>
                <div className="text-sm">
                  <strong>Sources:</strong> {nutrient.sources.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Educational Content */}
        <Card className="p-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">🌱 Understanding Healthy Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What is Stunting?</h4>
              <p className="text-sm text-muted-foreground mb-4">Stunting occurs when a child doesn't reach their growth potential due to poor nutrition, repeated infections, or inadequate care during critical periods.</p>
              <h4 className="font-semibold mb-2">Prevention is Key</h4>
              <p className="text-sm text-muted-foreground">The first 1,000 days (from conception to age 2) are crucial for preventing stunting and ensuring optimal development.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">During Pregnancy</h4>
              <p className="text-sm text-muted-foreground mb-4">Proper maternal nutrition and prenatal care are essential for preventing stunting before birth.</p>
              <h4 className="font-semibold mb-2">Monitoring Progress</h4>
              <p className="text-sm text-muted-foreground">Regular check-ups help track both maternal and fetal growth to identify and address any concerns early.</p>
            </div>
          </div>
        </Card>
      </div>
  )
}