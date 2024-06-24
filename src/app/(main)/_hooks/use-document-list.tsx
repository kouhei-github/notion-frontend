"use client"

import { useState } from "react"

import { useParams, useRouter } from "next/navigation"

import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import { useQuery } from "convex/react"

const useDocumentList = (parentDocumentId?: Id<"documents">) => {
  const params = useParams()
  const router = useRouter()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const onExpand = (documentId: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }))
  }

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  })

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  return {
    params,
    expanded,
    onExpand,
    documents,
    onRedirect,
  }
}

export { useDocumentList }
