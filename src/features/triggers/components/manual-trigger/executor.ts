import type { NodeExecutor } from "@/features/executions/types";

type ManualTriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<ManualTriggerData> = async ({
  nodeId,
  context,
  step,
}) => {
  //todo: publish "loading" state for manual trigger

  const result = await step.run("manual-trigger", async () => context);

  //todo: publish "success" state for manual trigger
  return result;
};
