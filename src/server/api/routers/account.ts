import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
  // Endpoint to fetch an Account by Id
  // Example: GET http://localhost:3000/api/trpc/user.getUserById?batch=1&input={"0":{"json": {"id": "account id"}}}
  getAccountbyId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.account.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }),
});
