"use client"

import { ReactNode } from "react"

import { redirect } from "next/navigation"

import Navigation from "@/app/(main)/_components/navigation"
import Spinner from "@/components/providers/spinner"
import { useConvexAuth } from "convex/react"

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return (
      <div className={"h-full flex items-center justify-center"}>
        <Spinner size={"lg"} />
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect("/")
  }

  return (
    <div className={"h-full flex dark:bg-[#1F1F1F]"}>
      <Navigation />
      <main className={"w-full"}>{children}</main>
    </div>
  )
}

export default MainLayout
