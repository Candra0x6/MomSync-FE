require("dotenv").config({ path: ".env.local" });
const { PrismaClient } = require("@prisma/client");

async function test() {
  const prisma = new PrismaClient();
  try {
    console.log("Testing connection with DATABASE_URL:", process.env.DATABASE_URL);
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Connection successful:", result);
  } catch (e) {
    console.log("❌ Connection failed:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
