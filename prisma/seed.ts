// Script to fill the database with test data
// From: https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function main() {
    const user = await prisma.user.create({
      data: {
        name: "Test User",
        email: "testuser@example.com",
        password: "securepassword",
        profilePicture: "https://example.com/pic.jpg",
        history: {
          create: [
            {
              textEntered: "Some test text",
              isFavorite: true
            }
          ]
        },
        settings: {
          create: {
            fontScale: 14
          }
        }
      }
    });
  
    const testModule = await prisma.module.create({
      data: {
        title: "Test Module",
        description: "This is a test module",
        progress: 50,
        level: 1,
        dateCompleted: new Date(),
        expressions: {
          create: [
            {
              literal: "literal example 1",
              figurative: "figurative example 1",
              isCorrect: true
            },
            {
              literal: "literal example 2",
              figurative: "figurative example 2",
              isCorrect: false
            }
          ]
        }
      }
    });
  
    console.log({ user, testModule });
  }
  
  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })