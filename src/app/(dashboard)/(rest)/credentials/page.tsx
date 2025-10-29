import { requireAuth } from "@/lib/auth-utils"

const CredentialsPage = async() => {
  await requireAuth()
  return (
    <div>CredentialsPage</div>
  )
}

export default CredentialsPage