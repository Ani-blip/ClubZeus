import { GoogleGenAI } from "@google/genai";

export async function generateHighQualityLogo(base64Image: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image,
            mimeType: "image/png",
          },
        },
        {
          text: "Please recreate this logo in high quality. It should be a clean, modern vector-style logo on a transparent or solid black background. The logo features a shield with a fist holding a lightning bolt. The colors should be silver/metallic and electric blue, matching the 'Club Zeus' theme. High resolution, professional design.",
        },
      ],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
