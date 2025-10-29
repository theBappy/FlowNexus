import { requireAuth } from "@/lib/auth-utils"

interface WorkflowIdPageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

const WorkflowIdPage = async ({ params }: WorkflowIdPageProps) => {
  await requireAuth()
  const { workflowId } = await params;
  return <div>WorkflowId: {workflowId}</div>;
};

export default WorkflowIdPage;
