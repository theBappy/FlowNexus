import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const executeAI = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "3s");

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system: "You are a helpful assistant",
        prompt: "What is the newton's 3rd law?",
      }
    );
    const { steps: openaiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: openai("gpt-4"),
        system: "You are a helpful assistant",
        prompt: "What is the newton's 3rd law?",
      }
    );
    const { steps: anthropicSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: anthropic("claude-sonnet-4-5"),
        system: "You are a helpful assistant",
        prompt: "What is the newton's 3rd law?",
      }
    );
    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps,
    };
  }
);
