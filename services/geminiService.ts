
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedCopy } from "../types";

export const generateMarketingCopy = async (
  niche: string, 
  targetAudience: string, 
  goal: string
): Promise<GeneratedCopy> => {
  // Use a safe check for the environment variable
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  
  const prompt = `Create a high-converting marketing campaign for promoting GoHighLevel to ${targetAudience} in the ${niche} niche. 
  The goal is: ${goal}. 
  Focus on the 40% recurring commission for the affiliate or the all-in-one automation for the user.
  Provide a catchy headline, the main body copy, a strong CTA, and a brief explanation of the psychological strategy used.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          body: { type: Type.STRING },
          cta: { type: Type.STRING },
          strategy: { type: Type.STRING },
        },
        required: ["headline", "body", "cta", "strategy"],
      },
    },
  });

  if (!response.text) {
    throw new Error("No response from AI");
  }

  return JSON.parse(response.text.trim());
};
