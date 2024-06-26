"use client"

import { api } from "../../../../../../convex/_generated/api"
import { Id } from "../../../../../../convex/_generated/dataModel"
import ToolBar from "@/components/toolbar"
import { useQuery } from "convex/react"

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">
  }
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  })

  if (typeof document === "undefined") {
    return <div>Loading...</div>
  }

  if (document === null) {
    return <div>Not Found</div>
  }
  return (
    <div className={"pb-40"}>
      <div className={"md:max-w-3xl lg:max-w-4xl mx-auto"}>
        <div className={"h-[35vh]"} />
        <ToolBar initialData={document} />
      </div>
    </div>
  )
}

export default DocumentIdPage
