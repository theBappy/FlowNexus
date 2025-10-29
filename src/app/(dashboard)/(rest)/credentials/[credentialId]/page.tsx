import { requireAuth } from "@/lib/auth-utils"

interface CredentialIdPageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const CredentialIdPage = async ({ params }: CredentialIdPageProps) => {
  await requireAuth()
  const { credentialId } = await params;
  return <div>CredentialId: {credentialId}</div>;
};

export default CredentialIdPage;
