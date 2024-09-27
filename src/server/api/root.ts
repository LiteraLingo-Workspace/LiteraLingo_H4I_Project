import { userRouter } from "~/server/api/routers/user";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { openaiRouter } from "./routers/openai";

// primary router for your server -- all routers added in /api/routers should be manually added here
export const appRouter = createTRPCRouter({
  user: userRouter,
  openai: openaiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// create a server-side caller for the tRPC API -- for example:
// const trpc = createCaller(createContext);
// const res = await trpc.user.all(); (returns []User)
export const createCaller = createCallerFactory(appRouter);
