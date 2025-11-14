import { PrismaClient, Mood, Nutritions } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data (optional, remove if you want to preserve data)
  // await prisma.healthSignsMonitoring.deleteMany({});
  // await prisma.journalEntry.deleteMany({});
  // await prisma.appointment.deleteMany({});
  // await prisma.labResult.deleteMany({});
  // await prisma.mother.deleteMany({});
  // await prisma.educationResource.deleteMany({});
  // await prisma.stuntingEducation.deleteMany({});

  // Create Mothers
  console.log("👩 Creating mothers...");
  const mother1 = await prisma.mother.upsert({
    where: { email: "sarah.johnson@example.com" },
    update: {},
    create: {
      email: "sarah.johnson@example.com",
      full_name: "Sarah Johnson",
      phone_number: "+1-555-0101",
      location: "New York, NY",
      date_of_birth: new Date("1990-03-15"),
    },
  });

  const mother2 = await prisma.mother.upsert({
    where: { email: "emily.williams@example.com" },
    update: {},
    create: {
      email: "emily.williams@example.com",
      full_name: "Emily Williams",
      phone_number: "+1-555-0102",
      location: "Los Angeles, CA",
      date_of_birth: new Date("1992-07-22"),
    },
  });

  const mother3 = await prisma.mother.upsert({
    where: { email: "jessica.brown@example.com" },
    update: {},
    create: {
      email: "jessica.brown@example.com",
      full_name: "Jessica Brown",
      phone_number: "+1-555-0103",
      location: "Chicago, IL",
      date_of_birth: new Date("1988-11-08"),
    },
  });

  // Create Health Signs Monitoring
  console.log("❤️ Creating health monitoring records...");
  await prisma.healthSignsMonitoring.createMany({
    data: [
      {
        heart_rate: 72,
        blood_pressure: "120/80",
        o2_saturation: 98,
        stress_level: 3,
        motherId: mother1.id,
      },
      {
        heart_rate: 68,
        blood_pressure: "118/76",
        o2_saturation: 99,
        stress_level: 2,
        motherId: mother1.id,
      },
      {
        heart_rate: 75,
        blood_pressure: "122/82",
        o2_saturation: 97,
        stress_level: 4,
        motherId: mother2.id,
      },
      {
        heart_rate: 70,
        blood_pressure: "119/79",
        o2_saturation: 98,
        stress_level: 3,
        motherId: mother3.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Journal Entries
  console.log("📔 Creating journal entries...");
  await prisma.journalEntry.createMany({
    data: [
      {
        mood: Mood.HAPPY,
        symptoms: "Mild nausea in the morning",
        nutritions: Nutritions.EXCELLENT,
        notes: "Had a great day, feeling energetic and positive.",
        motherId: mother1.id,
      },
      {
        mood: Mood.ANXIOUS,
        symptoms: "Back pain, fatigue",
        nutritions: Nutritions.GOOD,
        notes: "Feeling a bit overwhelmed with work stress.",
        motherId: mother1.id,
      },
      {
        mood: Mood.NEUTRAL,
        symptoms: "Headache",
        nutritions: Nutritions.FAIR,
        notes: "Regular day, nothing special.",
        motherId: mother2.id,
      },
      {
        mood: Mood.HAPPY,
        symptoms: "None",
        nutritions: Nutritions.EXCELLENT,
        notes: "Feeling wonderful, got great sleep last night.",
        motherId: mother2.id,
      },
      {
        mood: Mood.SAD,
        symptoms: "Fatigue, dizziness",
        nutritions: Nutritions.POOR,
        notes: "Not feeling well today, skipped some meals.",
        motherId: mother3.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Appointments
  console.log("📅 Creating appointments...");
  await prisma.appointment.createMany({
    data: [
      {
        appointment_date: new Date("2025-11-20T10:00:00"),
        doctor_name: "Dr. Michael Chen",
        purpose: "Prenatal checkup",
        location: "Manhattan Medical Center",
        motherId: mother1.id,
      },
      {
        appointment_date: new Date("2025-11-25T14:30:00"),
        doctor_name: "Dr. Sarah Davis",
        purpose: "Ultrasound screening",
        location: "NYC Imaging Center",
        motherId: mother1.id,
      },
      {
        appointment_date: new Date("2025-11-22T09:00:00"),
        doctor_name: "Dr. James Wilson",
        purpose: "General health check",
        location: "LA Health Clinic",
        motherId: mother2.id,
      },
      {
        appointment_date: new Date("2025-12-01T11:00:00"),
        doctor_name: "Dr. Patricia Martinez",
        purpose: "Prenatal checkup",
        location: "Chicago Medical Hospital",
        motherId: mother3.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Lab Results
  console.log("🔬 Creating lab results...");
  await prisma.labResult.createMany({
    data: [
      {
        test_name: "Blood Glucose",
        result_value: "95 mg/dL",
        normal_range: "70-100 mg/dL",
        test_date: new Date("2025-11-10"),
        motherId: mother1.id,
      },
      {
        test_name: "Hemoglobin",
        result_value: "12.5 g/dL",
        normal_range: "12.0-16.0 g/dL",
        test_date: new Date("2025-11-10"),
        motherId: mother1.id,
      },
      {
        test_name: "Blood Pressure",
        result_value: "120/80 mmHg",
        normal_range: "<130/80 mmHg",
        test_date: new Date("2025-11-08"),
        motherId: mother2.id,
      },
      {
        test_name: "Thyroid Function (TSH)",
        result_value: "2.1 mIU/L",
        normal_range: "0.4-4.0 mIU/L",
        test_date: new Date("2025-11-09"),
        motherId: mother2.id,
      },
      {
        test_name: "Protein Level",
        result_value: "7.2 g/dL",
        normal_range: "6.0-8.3 g/dL",
        test_date: new Date("2025-11-11"),
        motherId: mother3.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Education Resources
  console.log("📚 Creating education resources...");
  await prisma.educationResource.createMany({
    data: [
      {
        title: "Pregnancy Nutrition Guide",
        description:
          "Comprehensive guide on proper nutrition during pregnancy",
        url: "https://example.com/pregnancy-nutrition",
      },
      {
        title: "Exercise During Pregnancy",
        description: "Safe exercises and physical activities for pregnant women",
        url: "https://example.com/pregnancy-exercise",
      },
      {
        title: "Mental Health in Pregnancy",
        description: "Understanding and managing mental health during pregnancy",
        url: "https://example.com/pregnancy-mental-health",
      },
      {
        title: "Preparing for Childbirth",
        description: "Everything you need to know about labor and delivery",
        url: "https://example.com/childbirth-preparation",
      },
      {
        title: "Postpartum Care",
        description: "Guide for recovery and self-care after childbirth",
        url: "https://example.com/postpartum-care",
      },
    ],
    skipDuplicates: true,
  });

  // Create Stunting Education Resources
  console.log("🥗 Creating stunting education resources...");
  await prisma.stuntingEducation.createMany({
    data: [
      {
        title: "Understanding Child Stunting",
        description:
          "What is stunting and how to prevent it in children under 5",
        url: "https://example.com/stunting-prevention",
      },
      {
        title: "Nutrition for Child Growth",
        description: "Essential nutrients for healthy child development",
        url: "https://example.com/child-nutrition",
      },
      {
        title: "Early Intervention Programs",
        description: "How to participate in stunting prevention programs",
        url: "https://example.com/intervention-programs",
      },
      {
        title: "Monitoring Child Growth",
        description: "Tools and techniques to monitor your child's growth",
        url: "https://example.com/growth-monitoring",
      },
      {
        title: "Breastfeeding Benefits",
        description:
          "How breastfeeding helps prevent stunting in young children",
        url: "https://example.com/breastfeeding-benefits",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Database seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
