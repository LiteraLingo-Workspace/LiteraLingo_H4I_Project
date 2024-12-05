import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  currentUser: protectedProcedure.query(async ({ ctx }) => {
    const currentUser = await ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
    });

    return currentUser ?? null;
  }),
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

  // Endpoint to delete user by user ID
  // Note that this will also delete any associated data (settings, etc)
  // Example: POST http://localhost:3000/api/trpc/user.deleteUserById?batch=1 with payload: {"0":{"json": {"id": "user_id"}}}
  deleteUserById: publicProcedure
    // .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const loggedInUserId = ctx.session?.user?.id;

      const user = await ctx.db.user.findUnique({
        // where: { id: input.id },
        where: { id: loggedInUserId },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const deletedUser = await ctx.db.user.delete({
        where: {
          id: loggedInUserId,
        },
      });
      
      
      if (!deletedUser) {
        throw new Error("User was not deleted properly");
      }

      return deletedUser;
    }),

  // Endpoint to create of update a userSettings: true -> increment by 1; false -> reset to 0
  updateUserStreak: publicProcedure
  .input(z.object({ id: z.string(), increment: z.boolean() }))
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: input.id,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await ctx.db.user.update({
      where: {
        id: input.id,
      },
      data: {
        streakDays: input.increment ? { increment: 1 } : 0,
      },
    });

    return updatedUser;
  }),
});
