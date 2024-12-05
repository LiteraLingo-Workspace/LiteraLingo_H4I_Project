import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  currentUser: protectedProcedure.query(async ({ ctx }) => {
    const currentUser = await ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
    });

    return currentUser ?? null;
  }),
  // GET to http://localhost:3000/api/trpc/user.you?batch=1
});
