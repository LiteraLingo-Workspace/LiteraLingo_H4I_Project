import { NextApiRequest, NextApiResponse } from "next";
import { resultOf } from "node_modules/@trpc/client/dist/links/internals/urlWithConnectionParams";
import Configuration, { OpenAI } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI({ ...configuration });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt:
          'Translate the following English text to French: "Hello, how are you?"',
        max_tokens: 60,
      });

      res.status(200).json({ resultOf: response.created });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
