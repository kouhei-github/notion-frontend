"use client"

import Link from "next/link"

import Spinner from "@/components/providers/spinner"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  return (
    <div className={"max-w-3xl space-y-4"}>
      <h1 className={"text-3xl sm:text-5xl md:text-6xl font-bold"}>
        Your Idea, Documents, & Plans. Unified. Welcome to{" "}
        <span className={"underline"}>Kotion</span>
      </h1>
      <h3 className={"text-base sm:text-xl md:text-2xl font-medium"}>
        Kotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className={"w-full justify-center items-center flex"}>
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Kotion
            <ArrowRight className={"h-4 w-4 ml-2"} />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode={"modal"}>
          <Button>
            Get Kotion free <ArrowRight className={"h-4 w-4 ml-2"} />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading
