import { requireAuth } from "@/lib/auth-utils"

const ExecutionsPage = async() => {
  await requireAuth()
  return (
    <div>ExecutionsPage</div>
  )
}

export default ExecutionsPage