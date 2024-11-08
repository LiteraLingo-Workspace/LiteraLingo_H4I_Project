import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const historyEntryRouter = createTRPCRouter({
  // Endpoint to create a HistoryEntry
  // EXAMPLE: POST http://localhost:3000/api/trpc/historyEntry.create?batch=1
  create: publicProcedure
    .input(
      z.object({
        textEntered: z.string().min(1),
        outputText: z.string().min(1),
        isFavorite: z.boolean().optional(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: input.userId,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return ctx.db.historyEntry.create({
        data: {
          textEntered: input.textEntered,
          outputText: input.outputText,
          isFavorite: input.isFavorite,
          userId: input.userId,
        },
      });
    }),
  // Endpoint to fetch a HistoryEntry by ID
  // Example: GET http://localhost:3000/api/trpc/historyEntry.getHistoryEntryById?batch=1&input={"0":{"json": {"id": 1}}}
  getHistoryEntryById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const historyEntry = await ctx.db.historyEntry.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!historyEntry) {
        throw new Error("HistoryEntry not found");
      }

      return historyEntry;
    }),

  // Endpoint to update a HistoryEntry object favorite field by ID and payload
  // Example: POST http://localhost:3000/api/trpc/historyEntry.updateIsFavorite?batch=1 with payload {"0":{"json":{"id": 1, "isFavorite": false}}}
  updateIsFavorite: publicProcedure
    .input(
      z.object({
        id: z.number(),
        isFavorite: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedHistoryEntry = await ctx.db.historyEntry.update({
        where: {
          id: input.id,
        },
        data: {
          isFavorite: input.isFavorite,
        },
      });

      if (!updatedHistoryEntry) {
        throw new Error("HistoryEntry not found");
      }

      return updatedHistoryEntry;
    }),

    getAllHistoryEntries: publicProcedure.query(async ({ ctx }) => {
      const historyEntries = await ctx.db.historyEntry.findMany();
      return historyEntries;
    }),
});
