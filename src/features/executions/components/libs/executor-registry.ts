import { NodeType } from "@/generated/prisma";
import { NodeExecutor } from "../../types";
import { manualTriggerExecutor } from "@/features/triggers/components/manual-trigger/executor";
import { httRequestExecutor } from "../http-request/executor";
import { googleFormTriggerExecutor } from "../../../triggers/components/google-form-trigger/executor";

export const executorRegistry: Record<NodeType, NodeExecutor> = {
  [NodeType.INITIAL]: manualTriggerExecutor,
  [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
  [NodeType.HTTP_REQUEST]: httRequestExecutor, //todo:fix types
  [NodeType.GOOGLE_FORM_TRIGGER]: googleFormTriggerExecutor, //todo:fix types
};

export const getExecutor = (type: NodeType): NodeExecutor => {
  const executor = executorRegistry[type];
  if (!executor) {
    throw new Error(`No executor found for node type: {type}`);
  }
  return executor;
};
