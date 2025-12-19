
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generatePhonicsStory(sound: string, example: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a very short, silly 1-sentence story for a 5-year-old child using the phonics sound '${sound}' as in the word '${example}'. Keep it simple, fun, and use basic vocabulary suitable for a beginning reader.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "Oops, the story monster is hiding! Try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Let's stick to our word bank for now! You're doing great!";
  }
}
