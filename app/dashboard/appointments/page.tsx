"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Calendar, Clock, MapPin, User, Plus, CheckCircle, AlertTriangle } from "lucide-react"

const appointments = [
  {
    id: "apt1abc",
    date: "2024-11-02T10:00:00Z",
    doctor: "Dr. Sarah Williams",
    specialty: "Obstetrician",
    location: "Women's Health Center - Room 205",
    type: "Routine Prenatal Checkup",
    status: "confirmed",
    notes: "Monthly checkup - blood pressure, weight, baby heartbeat",
    duration: "30 minutes"
  },
  {
    id: "apt1def", 
    date: "2024-11-15T14:30:00Z",
    doctor: "Dr. Michael Chen",
    specialty: "Ultrasound Specialist",
    location: "Radiology Department - Room 101",
    type: "Anatomy Scan",
    status: "scheduled",
    notes: "Detailed ultrasound to check baby's development",
    duration: "45 minutes"
  },
  {
    id: "apt1ghi",
    date: "2024-10-25T09:15:00Z",
    doctor: "Dr. Sarah Williams", 
    specialty: "Obstetrician",
    location: "Women's Health Center - Room 205",
    type: "Follow-up Visit",
    status: "completed",
    notes: "Blood work results review, nutrition counseling",
    duration: "20 minutes"
  }
]

export default function AppointmentsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700'
      case 'scheduled': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-gray-100 text-gray-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'scheduled': return <Clock className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <AlertTriangle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const upcomingAppointments = appointments.filter(apt => new Date(apt.date) > new Date())
  const pastAppointments = appointments.filter(apt => new Date(apt.date) <= new Date())

  return (
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Medical Appointments</h1>
              <p className="text-muted-foreground">Manage your prenatal care appointments and visits</p>
            </div>
            <Button size="lg" className="rounded-full">
              <Plus className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <Calendar className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{upcomingAppointments.length}</div>
            <div className="text-sm text-muted-foreground">Upcoming Appointments</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">{pastAppointments.length}</div>
            <div className="text-sm text-muted-foreground">Completed Visits</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-green-50 to-emerald-50 border-green-200">
            <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-sm text-muted-foreground">Healthcare Providers</div>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 border-l-4 border-l-[#1f4b4a] hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{appointment.type}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(appointment.date)} at {formatTime(appointment.date)}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {appointment.doctor} - {appointment.specialty}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {appointment.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration: {appointment.duration}
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>
                        {getStatusIcon(appointment.status)}
                        <span className="ml-2 capitalize">{appointment.status}</span>
                      </Badge>
                    </div>
                    
                    {appointment.notes && (
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-2">Appointment Notes</h4>
                        <p className="text-sm">{appointment.notes}</p>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Past Appointments */}
        {pastAppointments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Recent Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map((appointment, index) => (
                <Card key={appointment.id} className="p-6 bg-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{appointment.type}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(appointment.date)} at {formatTime(appointment.date)}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {appointment.doctor} - {appointment.specialty}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {getStatusIcon(appointment.status)}
                      <span className="ml-2 capitalize">{appointment.status}</span>
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <Card className="p-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">📅 Appointment Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Before Your Visit</h4>
              <p className="text-sm text-muted-foreground mb-4">Prepare questions, bring insurance cards, and arrive 15 minutes early</p>
              <h4 className="font-semibold mb-2">What to Bring</h4>
              <p className="text-sm text-muted-foreground">Insurance card, medication list, prenatal vitamins, and previous test results</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">During Your Visit</h4>
              <p className="text-sm text-muted-foreground mb-4">Ask questions, discuss concerns, and take notes about recommendations</p>
              <h4 className="font-semibold mb-2">Follow-up Care</h4>
              <p className="text-sm text-muted-foreground">Schedule next appointment before leaving and follow any care instructions</p>
            </div>
          </div>
        </Card>
      </div>
  )
}