"use client"

import Image from "next/image"

import { api } from "../../../../../convex/_generated/api"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { PlusCircle } from "lucide-react"
import { toast } from "sonner"

const DocumentsPage = () => {
  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({ title: "Untitled" })

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    })
  }

  return (
    <div className={"h-full flex flex-col items-center justify-center space-y-4"}>
      <Image src={"/empty.svg"} width={300} height={300} alt={"empty"} className={"dark:hidden"} />
      <Image
        src={"/empty-dark.svg"}
        width={300}
        height={300}
        alt={"empty"}
        className={"hidden dark:block"}
      />
      <h2 className={"text-lg font-medium"}>Welcome to {user?.firstName}&apos;s Kotion</h2>
      <Button onClick={() => onCreate()}>
        <PlusCircle className={"h-4 w-4 mr-2"} />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage
