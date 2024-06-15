"use client"

import Link from "next/link"

import Logo from "@/app/(marketing)/_components/Logo"
import { ModeToggle } from "@/components/modal-toggle"
import Spinner from "@/components/providers/spinner"
import { Button } from "@/components/ui/button"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useConvexAuth } from "convex/react"

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className={"md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"}>
        {isLoading && <Spinner />}
        {!isAuthenticated && (
          <>
            <SignInButton mode={"modal"}>
              <Button size={"sm"} variant={"ghost"}>
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode={"modal"}>
              <Button size={"sm"}>Get Kotion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Kotion</Link>
            </Button>
            <UserButton afterSignOutUrl={"/"} />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
