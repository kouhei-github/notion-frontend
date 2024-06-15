"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import { PlusCircle } from "lucide-react"

const DocumentsPage = () => {
  const { user } = useUser()
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
      <Button>
        <PlusCircle className={"h-4 w-4 mr-2"} />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage
