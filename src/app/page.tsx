"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogoutButton } from "./logout";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job queued");
      },
    })
  );
  const testAI = useMutation(trpc.testAI.mutationOptions({
    onSuccess: () => {
        toast.success("AI Job queued");
      },

    onError: () => {
      toast.error("Something went wrong")
    }
  }));
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      <div className="">{JSON.stringify(data, null, 2)}</div>
      <Button onClick={() => testAI.mutate()} disabled={testAI.isPending}>
        Test AI
      </Button>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create Workflow
      </Button>
    </div>
  );
};

export default Page;
