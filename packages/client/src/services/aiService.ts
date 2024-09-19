/* eslint-disable @typescript-eslint/no-unused-vars */
import openai from './openai';
import * as tf from '@tensorflow/tfjs-node';

export async function matchVendorToBuyer(vendorProfile: string, buyerProfile: string): Promise<string> {
  const prompt = `
    Vendor Profile: ${vendorProfile}
    Buyer Profile: ${buyerProfile}

    Analyze the vendor and buyer profiles and provide a matching score from 0 to 100, where 100 is a perfect match. 
    Explain your reasoning in 2-3 sentences.

    Output format:
    Score: [score]
    Explanation: [your explanation]
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are an expert AI matching vendor to buyer profiles." },
      { role: "user", content: prompt }
    ],
    max_tokens: 150,
  });

  // Check if response and choices are valid and not null
  if (response && response.choices && response.choices.length > 0 && response.choices[0].message?.content) {
    return response.choices[0].message.content.trim();
  } else {
    // Return a default message if there's no valid response
    return 'No valid response from OpenAI';
  }
}
