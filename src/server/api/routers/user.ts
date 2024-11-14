import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // Endpoint to fetch a User by ID
  // Example: GET http://localhost:3000/api/trpc/user.getUserById?batch=1&input={"0":{"json": {"id": "account id"}}}
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }),

  // Endpoint to create of update a userSettings
  // Example: PUT http://localhost:3000/api/trpc/user.updateUserSettings?batch=1 with payload: { "0": {"json": {"id": "USER_ID","font": 20}}}
  updateUserSettings: publicProcedure
    .input(z.object({ id: z.string(), font: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }

      let updatedSettings;
      const existingSettings = await ctx.db.userSettings.findUnique({
        where: {
          authorId: input.id,
        },
      });

      // If the settings already exist for a current user then just modify it
      if (existingSettings) {
        updatedSettings = await ctx.db.userSettings.update({
          where: {
            authorId: input.id,
          },
          data: {
            fontScale: input.font,
          },
        });
      } else {
        // If it does not exist, create one
        updatedSettings = await ctx.db.userSettings.create({
          data: {
            authorId: input.id,
            fontScale: input.font,
          },
        });
      }
      return updatedSettings;
    }),

  deleteUserAccount: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }

      const deleteUser = await ctx.db.user.delete({
        where: {
          id: input.id,
        },
      });

      return deleteUser;
    }),
});
