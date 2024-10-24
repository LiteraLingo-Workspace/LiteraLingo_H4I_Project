import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const historyEntryRouter = createTRPCRouter({
  // add history entry API
  create: publicProcedure
    .input(
      z.object({
        textEntered: z.string().min(1),
        outputText: z.string().min(1),
        isFavorite: z.boolean().optional(),
        historyEntryId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.historyEntry.create({
        data: {
          textEntered: input.textEntered,
          outputText: input.outputText,
          isFavorite: input.isFavorite,
          historyEntryId: input.historyEntryId,
        },
      });
    }),
});
