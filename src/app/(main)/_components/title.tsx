import React from "react"

import { Doc } from "../../../../convex/_generated/dataModel"
import { useTitle } from "@/app/(main)/_hooks/use-title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

interface TitleProps {
  initialData: Doc<"documents">
}

const Title = ({ initialData }: TitleProps) => {
  const { isEditing, inputRef, enableInput, disableInput, onChange, onKeyDown } =
    useTitle(initialData)
  return (
    <div className={"flex items-center gap-x-1"}>
      {!!initialData.icon && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onBlur={() => disableInput()}
          onClick={() => enableInput()}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className='h-7 px-2 focus-visible:ring-transparent'
        />
      ) : (
        <Button
          onClick={() => enableInput()}
          variant='ghost'
          size='sm'
          className='font-normal h-auto p-1'
        >
          <span className='truncate'>{initialData?.title}</span>
        </Button>
      )}
    </div>
  )
}

Title.Skeleton = function TitleSkeleton() {
  return <Skeleton className={"h-9 w-20 rounded-md"} />
}

export default Title
