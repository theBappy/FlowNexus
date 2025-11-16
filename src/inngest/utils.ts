import toposort from "toposort";
import { Node, Connection } from "@/generated/prisma";
import { inngest } from "./client";
import { createId } from "@paralleldrive/cuid2"

export const topologicalSort = (
  nodes: Node[],
  connections: Connection[]
): Node[] => {
  //if not connection , return node  as is
  if (connections.length === 0) return nodes;

  //create edges array for toposort
  const edges: [string, string][] = connections.map((conn) => [
    conn.fromNodeId,
    conn.toNodeId,
  ]);

  //add nodes with node connections with self-edges
  const connectedNodeIds = new Set<string>();
  for (const conn of connections) {
    connectedNodeIds.add(conn.fromNodeId);
    connectedNodeIds.add(conn.toNodeId);
  }

  for (const node of nodes) {
    if (!connectedNodeIds.has(node.id)) {
      edges.push([node.id, node.id]);
    }
  }

  //perform the topological sort
  let sortedNodeIds: string[];
  try {
    sortedNodeIds = toposort(edges);
    //remove duplicates from self-edges
    sortedNodeIds = [...new Set(sortedNodeIds)];
  } catch (error) {
    if (error instanceof Error && error.message.includes("Cyclic")) {
      throw new Error("Workflow contains a cycle");
    }
    throw error;
  }
  //map sorted IDs back to node object
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  return sortedNodeIds.map((id) => nodeMap.get(id)!).filter(Boolean);
};

export const sendWorkflowExecution = async (data: {
  workflowId: string;
  [key: string]: any;
}) => {
  await inngest.send({
    name: "workflows/execute.workflow",
    data,
    id: createId(),
  });
};
