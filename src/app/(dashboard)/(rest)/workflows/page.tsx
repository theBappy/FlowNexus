import { requireAuth } from "@/lib/auth-utils"

const WorkflowsPage = async() => {
  await requireAuth()
  return (
    <div>WorkflowsPage</div>
  )
}

export default WorkflowsPage