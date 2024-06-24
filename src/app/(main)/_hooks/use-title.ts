import React, { useRef, useState } from "react"

import { api } from "../../../../convex/_generated/api"
import { Doc } from "../../../../convex/_generated/dataModel"
import { useMutation } from "convex/react"

export const useTitle = (initialData: Doc<"documents">) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const update = useMutation(api.documents.update)

  const [title, setTitle] = useState(initialData.title || "Untitled")
  const [isEditing, setIsEditing] = useState(false)

  const disableInput = () => {
    setIsEditing(false)
  }
  const enableInput = () => {
    setTitle(initialData.title)
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
    }, 0)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    update({
      id: initialData._id,
      title: event.target.value || "Untitled",
    })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      disableInput()
    }
  }

  return {
    inputRef,
    isEditing,
    onKeyDown,
    onChange,
    disableInput,
    enableInput,
  }
}
