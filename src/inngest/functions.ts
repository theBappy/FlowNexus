import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //fetching
    await step.sleep("fetching", "5s");

    //transcribing
    await step.sleep("transcribing", "10s");

    //sending to AI
    await step.sleep("sending-to-ai", "10s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "workflow-from-inngest",
        },
      });
    });
  }
);
