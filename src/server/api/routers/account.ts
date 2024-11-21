import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
  // Endpoint to fetch an Account by Id
  // Example: GET http://localhost:3000/api/trpc/account.getAccountbyId?batch=1&input={"0":{"json": {"id": "account id"}}}
  getAccountById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.account.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!user) {
        throw new Error("Account not found");
      }
      return user;
    }),

  // Endpoint to fetch account(s) by user ID
  // Example: GET http://localhost:3000/api/trpc/account.getAccountbyUserId?batch=1&input={"0":{"json": {"userId": "user id"}}}
  getAccountByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.account.findMany({
        where: {
          userId: input.userId,
        },
      });
      if (!user) {
        throw new Error("Account not found");
      }
      return user;
    }),

  // Endpoint to delete user by user ID
  // Example: GET http://localhost:3000/api/trpc/account.deleteAccountbyUserId?batch=1&input={"0":{"json": {"userId": "user id"}}}
  deleteAccountByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const deletedAccount = await ctx.db.account.deleteMany({
        where: {
          userId: input.userId,
        },
      });

      if (!deletedAccount) {
        throw new Error("Account was not deleted properly");
      }

      return deletedAccount;
    }),
});
