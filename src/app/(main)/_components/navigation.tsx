"use client"

import React from "react"

import { useNavigationBar } from "@/app/(main)/_hooks/use-navigation-bar"
import { cn } from "@/lib/utils"
import { ChevronsLeft, MenuIcon } from "lucide-react"

const Navigation = () => {
  const {
    pathname,
    isMobile,
    isResizingRef,
    sidebarRef,
    navbarRef,
    isResetting,
    setIsResetting,
    isCollapsed,
    setIsCollapsed,
    handleMouseDown,
    resetWidth,
    collapse,
  } = useNavigationBar()
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-200",
          isMobile && "w-0",
        )}
      >
        <div
          role={"button"}
          onClick={() => collapse()}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100",
          )}
        >
          <ChevronsLeft className={"h-6 w-6"} />
        </div>
        <div>
          <p>Action items</p>
        </div>
        <div className={"mt-4"}>
          <p>Documents</p>
        </div>
        <div
          onMouseDown={(e) => {
            handleMouseDown(e)
          }}
          onClick={() => {
            resetWidth()
          }}
          className={
            "opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
          }
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out",
          isMobile && "left-0 w-full",
        )}
      >
        <nav>
          {isCollapsed && (
            <MenuIcon
              onClick={() => resetWidth()}
              role={"button"}
              className={"h-6 w-6 text-muted-foreground"}
            />
          )}
        </nav>
      </div>
    </>
  )
}

export default Navigation
