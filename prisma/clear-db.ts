import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.expression.deleteMany({});
  await prisma.historyEntry.deleteMany({});
  await prisma.userSettings.deleteMany({});
  await prisma.module.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('All data deleted successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
