"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { User, Phone, Mail, MapPin, Calendar, Heart, Baby, Clock, AlertCircle, Edit } from "lucide-react"

// Dummy data for Mother Profiles
const motherProfiles = [
  {
    id: "cm1abc123",
    name: "Sarah Johnson",
    age: 28,
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Oak Street, Springfield, USA",
    emergency_contact: "+1 (555) 987-6543",
    pregnancy_start: "2024-03-15T00:00:00Z",
    expected_due_date: "2024-12-15T00:00:00Z",
    created_at: "2024-03-15T08:30:00Z",
    updated_at: "2024-10-25T14:20:00Z",
    current_week: 28,
    trimester: 3,
    blood_type: "O+",
    complications: ["Gestational Diabetes"],
    notes: "Regular monitoring required for blood sugar levels. Diet and exercise plan in place."
  },
  {
    id: "cm1def456",
    name: "Emily Davis",
    age: 32,
    phone: "+1 (555) 234-5678",
    email: "emily.davis@email.com",
    address: "456 Pine Avenue, Riverside, USA",
    emergency_contact: "+1 (555) 876-5432",
    pregnancy_start: "2024-04-20T00:00:00Z",
    expected_due_date: "2025-01-20T00:00:00Z",
    created_at: "2024-04-20T10:15:00Z",
    updated_at: "2024-10-24T16:45:00Z",
    current_week: 24,
    trimester: 2,
    blood_type: "A+",
    complications: [],
    notes: "Healthy pregnancy progression. Continue with regular prenatal vitamins and exercise routine."
  },
  {
    id: "cm1ghi789",
    name: "Jessica Wilson",
    age: 26,
    phone: "+1 (555) 345-6789",
    email: "jessica.wilson@email.com",
    address: "789 Maple Drive, Lakewood, USA",
    emergency_contact: "+1 (555) 765-4321",
    pregnancy_start: "2024-05-10T00:00:00Z",
    expected_due_date: "2025-02-10T00:00:00Z",
    created_at: "2024-05-10T09:20:00Z",
    updated_at: "2024-10-23T11:30:00Z",
    current_week: 20,
    trimester: 2,
    blood_type: "B+",
    complications: ["Iron Deficiency"],
    notes: "Iron supplements prescribed. Regular blood tests to monitor iron levels and hemoglobin."
  },
  {
    id: "cm1jkl012",
    name: "Amanda Brown",
    age: 35,
    phone: "+1 (555) 456-7890",
    email: "amanda.brown@email.com",
    address: "321 Cedar Lane, Hilltown, USA",
    emergency_contact: "+1 (555) 654-3210",
    pregnancy_start: "2024-02-05T00:00:00Z",
    expected_due_date: "2024-11-05T00:00:00Z",
    created_at: "2024-02-05T14:45:00Z",
    updated_at: "2024-10-22T09:15:00Z",
    current_week: 36,
    trimester: 3,
    blood_type: "AB+",
    complications: ["High Blood Pressure"],
    notes: "Advanced maternal age pregnancy. Regular monitoring for blood pressure and fetal development."
  }
]

export default function MotherProfilePage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getWeeksRemaining = (dueDateString: string) => {
    const dueDate = new Date(dueDateString)
    const today = new Date()
    const diffTime = dueDate.getTime() - today.getTime()
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7))
    return Math.max(0, diffWeeks)
  }

  const getTrimesterColor = (trimester: number) => {
    switch (trimester) {
      case 1:
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 2:
        return 'bg-green-100 text-green-700 border-green-200'
      case 3:
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  // Statistics
  const totalMothers = motherProfiles.length
  const averageAge = Math.round(motherProfiles.reduce((sum, mother) => sum + mother.age, 0) / totalMothers)
  const withComplications = motherProfiles.filter(mother => mother.complications.length > 0).length

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
              <h1 className="text-3xl font-bold text-foreground mb-2">Mother Profiles</h1>
              <p className="text-muted-foreground">Manage and view detailed mother profile information</p>
            </div>
            <Button size="lg" className="rounded-full">
              <User className="w-5 h-5 mr-2" />
              Add New Profile
            </Button>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
              <User className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{totalMothers}</div>
              <div className="text-sm text-muted-foreground">Total Profiles</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{averageAge}</div>
              <div className="text-sm text-muted-foreground">Average Age</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 text-center bg-linear-to-br from-orange-50 to-red-50 border-orange-200">
              <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">{withComplications}</div>
              <div className="text-sm text-muted-foreground">Need Special Care</div>
            </Card>
          </motion.div>
        </div>

        {/* Mother Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {motherProfiles.map((mother, index) => (
            <motion.div
              key={mother.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#1f4b4a]">
                {/* Profile Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{mother.name}</h3>
                      <p className="text-muted-foreground">Age {mother.age} years</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>

                {/* Pregnancy Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 rounded-xl p-4 border border-[#1f4b4a]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Baby className="w-5 h-5 text-[#1f4b4a]" />
                      <span className="font-semibold text-foreground">Week {mother.current_week}</span>
                    </div>
                    <Badge className={getTrimesterColor(mother.trimester)}>
                      Trimester {mother.trimester}
                    </Badge>
                  </div>
                  
                  <div className="bg-secondary/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold text-foreground">{getWeeksRemaining(mother.expected_due_date)} weeks</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Until due date</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#1f4b4a]" />
                    <span className="text-sm text-foreground">{mother.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#1f4b4a]" />
                    <span className="text-sm text-foreground">{mother.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#1f4b4a] mt-0.5" />
                    <span className="text-sm text-foreground">{mother.address}</span>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6 border-l-4 border-l-blue-400">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-blue-600" />
                    Medical Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Blood Type:</span> {mother.blood_type}</div>
                    <div><span className="font-medium">Due Date:</span> {formatDate(mother.expected_due_date)}</div>
                    {mother.complications.length > 0 && (
                      <div>
                        <span className="font-medium">Complications:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {mother.complications.map((complication, idx) => (
                            <Badge key={idx} className="bg-red-100 text-red-700 border-red-200">
                              {complication}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 rounded-xl p-4 mb-6 border-l-4 border-l-red-400">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    Emergency Contact
                  </h4>
                  <p className="text-sm text-foreground">{mother.emergency_contact}</p>
                </div>

                {/* Doctor's Notes */}
                {mother.notes && (
                  <div className="bg-green-50 rounded-xl p-4 mb-6 border-l-4 border-l-green-400">
                    <h4 className="font-semibold text-foreground mb-2">Doctor's Notes</h4>
                    <p className="text-sm text-foreground">{mother.notes}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  <Button size="sm" className="rounded-full">
                    View Full Profile
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Calendar className="w-4 h-4 mr-1" />
                    Schedule Visit
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="p-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              📋 Profile Management Tips
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Keep Information Updated</h4>
                    <p className="text-sm text-muted-foreground">Regular updates ensure accurate medical care</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Emergency Contacts</h4>
                    <p className="text-sm text-muted-foreground">Always maintain current emergency contact information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Medical History</h4>
                    <p className="text-sm text-muted-foreground">Document all complications and medical conditions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Regular Monitoring</h4>
                    <p className="text-sm text-muted-foreground">Track pregnancy progress and milestones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Communication</h4>
                    <p className="text-sm text-muted-foreground">Maintain open communication with healthcare providers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1f4b4a] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground">Ensure all personal information is kept secure</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
  )
}