"use client"

import React from "react"

import { useParams } from "next/navigation"

import DocumentList from "@/app/(main)/_components/document-list"
import Item from "@/app/(main)/_components/item"
import Navbar from "@/app/(main)/_components/navbar"
import TrashBox from "@/app/(main)/_components/trash-box"
import UserItem from "@/app/(main)/_components/user-item"
import { useNavigationBar } from "@/app/(main)/_hooks/use-navigation-bar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useSearch } from "@/hooks/use-search"
import { useSettings } from "@/hooks/use-setting"
import { cn } from "@/lib/utils"
import { ChevronsLeft, MenuIcon, Plus, PlusCircle, Search, Settings, Trash } from "lucide-react"

const Navigation = () => {
  const {
    isMobile,

    sidebarRef,
    navbarRef,
    isResetting,

    isCollapsed,

    handleMouseDown,
    resetWidth,
    collapse,
    documents,
    handleCreate,
  } = useNavigationBar()

  const params = useParams()

  const search = useSearch()
  const settings = useSettings()
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
          <UserItem />
          <Item
            onClick={() => {
              search.onOpen()
            }}
            label='Search'
            icon={Search}
            isSearch
          />
          <Item
            onClick={() => {
              settings.onOpen()
            }}
            label='Settings'
            icon={Settings}
          />

          <Item onClick={() => handleCreate()} label='New page' icon={PlusCircle} />
        </div>
        <div className={"mt-4"}>
          <DocumentList />
          <Item label={"Add a page"} onClick={() => handleCreate()} icon={Plus} />
          <Popover>
            <PopoverTrigger className='w-full mt-4'>
              <Item label='Trash' icon={Trash} />
            </PopoverTrigger>
            <PopoverContent className='p-0 w-72' side={isMobile ? "bottom" : "right"}>
              <TrashBox />
            </PopoverContent>
          </Popover>
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
        {!!params.documentId ? (
          <Navbar isCollapsed={isCollapsed} onResetWidth={resetWidth} />
        ) : (
          <nav>
            {isCollapsed && (
              <MenuIcon
                onClick={() => resetWidth()}
                role={"button"}
                className={"h-6 w-6 text-muted-foreground"}
              />
            )}
          </nav>
        )}
      </div>
    </>
  )
}

export default Navigation
