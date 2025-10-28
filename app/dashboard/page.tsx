"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"
import { FileText, Download, Calendar, TrendingUp, CheckCircle, AlertTriangle, Upload } from "lucide-react"

const labResults = [
  {
    id: "lr1abc",
    date: "2024-10-25T09:00:00Z",
    testType: "Complete Blood Count (CBC)",
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Hemoglobin", value: "12.5 g/dL", range: "11.5-15.5 g/dL", status: "normal" },
      { name: "Hematocrit", value: "37%", range: "34-45%", status: "normal" },
      { name: "White Blood Cells", value: "7,200/μL", range: "4,000-11,000/μL", status: "normal" },
      { name: "Platelets", value: "245,000/μL", range: "150,000-450,000/μL", status: "normal" }
    ]
  },
  {
    id: "lr1def",
    date: "2024-10-20T11:30:00Z", 
    testType: "Glucose Screening Test",
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Glucose (1-hour)", value: "135 mg/dL", range: "<140 mg/dL", status: "normal" }
    ]
  },
  {
    id: "lr1ghi",
    date: "2024-10-15T08:45:00Z",
    testType: "Urinalysis", 
    doctor: "Dr. Sarah Williams",
    status: "normal",
    results: [
      { name: "Protein", value: "Trace", range: "Negative-Trace", status: "normal" },
      { name: "Glucose", value: "Negative", range: "Negative", status: "normal" },
      { name: "Bacteria", value: "Few", range: "Few-Moderate", status: "normal" }
    ]
  }
]

export default function LabResultsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-700'
      case 'abnormal': return 'bg-red-100 text-red-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle className="w-4 h-4" />
      case 'abnormal': return <AlertTriangle className="w-4 h-4" />
      case 'pending': return <TrendingUp className="w-4 h-4" />
      default: return <CheckCircle className="w-4 h-4" />
    }
  }

  const getResultStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600'
      case 'high': return 'text-red-600'
      case 'low': return 'text-orange-600'
      default: return 'text-green-600'
    }
  }

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
              <h1 className="text-3xl font-bold text-foreground mb-2">Lab Results</h1>
              <p className="text-muted-foreground">View and track your prenatal laboratory test results</p>
            </div>
            <Button size="lg" className="rounded-full">
              <Upload className="w-5 h-5 mr-2" />
              Upload Results
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5 border-[#1f4b4a]/20">
            <FileText className="w-12 h-12 text-[#1f4b4a] mx-auto mb-4" />
            <div className="text-3xl font-bold text-[#1f4b4a] mb-2">{labResults.length}</div>
            <div className="text-sm text-muted-foreground">Total Lab Reports</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-green-50 to-emerald-50 border-green-200">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">{labResults.filter(r => r.status === 'normal').length}</div>
            <div className="text-sm text-muted-foreground">Normal Results</div>
          </Card>

          <Card className="p-6 text-center bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Results Within Range</div>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Recent Lab Results</h2>
          
          {labResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{result.testType}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(result.date)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ordered by: {result.doctor}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(result.status)}>
                      {getStatusIcon(result.status)}
                      <span className="ml-2 capitalize">{result.status}</span>
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold mb-3">Test Results</h4>
                  {result.results.map((test, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{test.name}</div>
                        <div className="text-sm text-muted-foreground">Reference: {test.range}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${getResultStatusColor(test.status)}`}>
                          {test.value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">{test.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="p-8 mt-8 bg-linear-to-br from-[#1f4b4a]/5 to-[#2d6a68]/5">
          <h3 className="text-2xl font-semibold mb-6 text-center">🔬 Understanding Your Lab Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Normal Values</h4>
              <p className="text-sm text-muted-foreground mb-4">Results within the reference range indicate healthy levels for pregnancy</p>
              <h4 className="font-semibold mb-2">Track Changes</h4>
              <p className="text-sm text-muted-foreground">Monitor trends over time to ensure your health is on track</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ask Questions</h4>
              <p className="text-sm text-muted-foreground mb-4">Discuss any concerns or abnormal results with your healthcare provider</p>
              <h4 className="font-semibold mb-2">Keep Records</h4>
              <p className="text-sm text-muted-foreground">Save all lab results for your medical records and future reference</p>
            </div>
          </div>
        </Card>
      </div>
  )
}