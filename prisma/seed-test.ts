import { PrismaClient } from '@prisma/client';

// Ensure that the database is properly seeded from seed script (seed.ts)

const prisma = new PrismaClient();

async function testSeeding() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: 1 },
      include: {
        history: true, 
        settings: true,
      },
    });

    const testModule = await prisma.module.findUnique({
      where: { id: 1 },
      include: {
        expressions: true,
      },
    });

    console.log('User:', user);
    console.log('Module:', testModule);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testSeeding().catch(error => {
    console.error("Error in seed test:", error);
})
