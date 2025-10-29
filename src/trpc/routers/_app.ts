import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";
import { TRPCError } from "@trpc/server";


export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "thebappy@gmail.com",
      },
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),
});
export type AppRouter = typeof appRouter;
