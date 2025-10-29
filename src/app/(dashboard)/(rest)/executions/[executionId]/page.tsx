import { requireAuth } from "@/lib/auth-utils"

interface ExecutionIdPageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const ExecutionIdPage = async ({ params }: ExecutionIdPageProps) => {
  await requireAuth()
  const { executionId } = await params;
  return <div>ExecutionId: {executionId}</div>;
};

export default ExecutionIdPage;
