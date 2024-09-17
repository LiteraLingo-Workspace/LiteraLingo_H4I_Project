import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  // GET to http://localhost:3000/api/trpc/user.hello?batch=1&input={"0":{"json": {"text": "world"}}}

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
    }),
  // POST to http://localhost:3000/api/trpc/user.create?batch=1
  // send as payload: {"0":{"json": {"name": "...","email": "...","password": "..."}}}

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return user ?? null;
  }),
  // GET to http://localhost:3000/api/trpc/user.getLatest?batch=1
});
