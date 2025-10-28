"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Activity, Heart, Thermometer, TrendingUp, Calendar, AlertTriangle, CheckCircle, Plus } from "lucide-react"

// Dummy data for Health Monitoring
const healthSigns = [
  {
    id: "hs1abc",
    date: "2024-10-28T08:30:00Z",
    blood_pressure_systolic: 118,
    blood_pressure_diastolic: 76,
    heart_rate: 82,
    temperature: 98.6,
    weight: 145,
    notes: "Feeling good, no morning sickness today. Good appetite and energy levels.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  },
  {
    id: "hs1def",
    date: "2024-10-27T09:15:00Z", 
    blood_pressure_systolic: 122,
    blood_pressure_diastolic: 78,
    heart_rate: 85,
    temperature: 98.4,
    weight: 144.8,
    notes: "Slight headache in the morning, resolved after rest. Baby movements felt strongly.",
    motherId: "cm1abc123",
    motherName: "Sarah Johnson"
  }
]

export default function HealthMonitoringPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (value: number, type: string) => {
    switch (type) {
      case 'bp_systolic':
        if (value < 120) return 'text-green-600'
        if (value < 140) return 'text-yellow-600'
        return 'text-red-600'
      case 'heart_rate':
        if (value >= 60 && value <= 100) return 'text-green-600'
        return 'text-yellow-600'
      default:
        return 'text-green-600'
    }
  }

  const latestSigns = healthSigns[0]
  const averageBP = Math.round((healthSigns.reduce((sum, sign) => sum + sign.blood_pressure_systolic, 0)) / healthSigns.length)
  const averageHR = Math.round((healthSigns.reduce((sum, sign) => sum + sign.heart_rate, 0)) / healthSigns.length)

  return (
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Health Monitoring</h1>
              <p className="text-muted-foreground">Track vital signs and daily health measurements</p>
            </div>
            <Button size="lg" className="rounded-full">
              <Plus className="w-5 h-5 mr-2" />
              Add Measurement
            </Button>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <Heart className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{averageBP}/76</div>
            <div className="text-sm text-muted-foreground">Avg Blood Pressure</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-red-50 to-pink-50 border-red-200">
            <Activity className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">{averageHR}</div>
            <div className="text-sm text-muted-foreground">Avg Heart Rate (BPM)</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">{healthSigns.length}</div>
            <div className="text-sm text-muted-foreground">Measurements This Week</div>
          </Card>
        </div>

        {/* Latest Measurement */}
        <Card className="p-6 mb-8 border-l-4 border-l-[#1f4b4a]">
          <h2 className="text-xl font-semibold mb-4">Latest Measurement</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[#1f4b4a]/5 rounded-xl">
              <Heart className="w-6 h-6 text-[#1f4b4a] mx-auto mb-2" />
              <div className="text-lg font-bold">{latestSigns.blood_pressure_systolic}/{latestSigns.blood_pressure_diastolic}</div>
              <div className="text-sm text-muted-foreground">Blood Pressure</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <Activity className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <div className="text-lg font-bold">{latestSigns.heart_rate}</div>
              <div className="text-sm text-muted-foreground">Heart Rate (BPM)</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Thermometer className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold">{latestSigns.temperature}°F</div>
              <div className="text-sm text-muted-foreground">Temperature</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-lg font-bold">{latestSigns.weight} lbs</div>
              <div className="text-sm text-muted-foreground">Weight</div>
            </div>
          </div>
        </Card>

        {/* Health History */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recent Measurements</h2>
          {healthSigns.map((sign, index) => (
            <Card key={sign.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{formatDate(sign.date)}</h3>
                  <p className="text-muted-foreground">{sign.motherName}</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Normal Range</Badge>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Blood Pressure</div>
                  <div className="font-semibold">{sign.blood_pressure_systolic}/{sign.blood_pressure_diastolic} mmHg</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Heart Rate</div>
                  <div className="font-semibold">{sign.heart_rate} BPM</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Temperature</div>
                  <div className="font-semibold">{sign.temperature}°F</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Weight</div>
                  <div className="font-semibold">{sign.weight} lbs</div>
                </div>
              </div>

              {sign.notes && (
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Notes</h4>
                  <p className="text-sm">{sign.notes}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Tips */}
        <Card className="p-8 mt-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">💡 Health Monitoring Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Daily Measurements</h4>
              <p className="text-sm text-muted-foreground mb-4">Take measurements at the same time each day for consistency</p>
              <h4 className="font-semibold mb-2">Record Everything</h4>
              <p className="text-sm text-muted-foreground">Include notes about how you're feeling and any symptoms</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Watch for Changes</h4>
              <p className="text-sm text-muted-foreground mb-4">Monitor trends and report significant changes to your doctor</p>
              <h4 className="font-semibold mb-2">Stay Hydrated</h4>
              <p className="text-sm text-muted-foreground">Proper hydration affects all vital signs measurements</p>
            </div>
          </div>
        </Card>
      </div>
  )
}