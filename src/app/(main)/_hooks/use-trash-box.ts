import { useState } from "react"

import { useParams, useRouter } from "next/navigation"

import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import { useMutation, useQuery } from "convex/react"
import { toast } from "sonner"

const useTrashBox = () => {
  const router = useRouter()
  const params = useParams()
  const documents = useQuery(api.documents.getTrash)
  const restore = useMutation(api.documents.restore)
  const remove = useMutation(api.documents.remove)

  const [search, setSearch] = useState("")

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })

  console.log(filteredDocuments)

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">,
  ) => {
    event.stopPropagation()
    const promise = restore({ id: documentId })

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored",
      error: "Failed to restore note.",
    })
  }

  const onRemove = (documentId: Id<"documents">) => {
    const promise = remove({ id: documentId })

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted",
      error: "Failed to delete note.",
    })
    if (params.documentId === documentId) {
      router.push("/documents")
    }
  }

  return {
    documents,
    onRemove,
    onRestore,
    onClick,
    filteredDocuments,
    setSearch,
    search,
  }
}

export { useTrashBox }
