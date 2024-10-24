import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import Configuration, { OpenAI } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI({ ...configuration });

// GET to http://localhost:3000/api/trpc/openai.translate?batch=1
// No Content-Type specified in header
// JSON: {"0":{"json": {"text": "hello world"}}}

export const openaiRouter = createTRPCRouter({
  translate: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Provide a literal explanation for the input sentence. Limit the response to 10 words.",
            },
            { role: "user", content: input.text },
          ],
          max_tokens: 60,
        });

        return { result: response.choices[0]?.message.content, data: response };
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`OpenAI API error: ${error.message}`);
        } else {
          throw new Error("An unknown error occurred");
        }
      }
    }),
});
