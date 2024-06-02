import { GoogleGenerativeAI } from "@google/generative-ai";
require('dotenv').config();

const PROMPT = 'Describe a cat in a few sentences';
const MODEL = 'gemini-pro';
console.log(`** GenAI text: '${MODEL}' model & prompt '${PROMPT}'\n`);

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({model: MODEL});
  const result = await model.generateContent(PROMPT);
  console.log(await result.response.text());
}

main();