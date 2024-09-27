import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const historyEntryRouter = createTRPCRouter({
  // Endpoint to fetch a HistoryEntry by ID
  // Example: GET http://localhost:3000/api/trpc/saved.getHistoryEntryById?batch=1&input={"0":{"json": {"id": 1}}}
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
  // Example: POST http://localhost:3000/api/trpc/saved.updateIsFavorite?batch=1 with payload {"0":{"json":{"id": 1, "isFavorite": false}}}
  updateIsFavorite: publicProcedure
    .input(
      z.object({
        id: z.number(),
        isFavorite: z.boolean(),
      })
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
});
