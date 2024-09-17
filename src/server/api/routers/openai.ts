import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import Configuration, { OpenAI } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI({ ...configuration });

export const openaiRouter = createTRPCRouter({
  translate: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const response = await openai.completions.create({
          model: "gpt-3.5-turbo-instruct",
          prompt: `Translate the following English text to French: "${input.text}"`,
          max_tokens: 60,
        });

        return { result: response.created };
      } catch (error: any) {
        throw new Error(`OpenAI API error: ${error.message}`);
      }
    }),
});