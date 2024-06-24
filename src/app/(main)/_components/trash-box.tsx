"use client"

import { useTrashBox } from "@/app/(main)/_hooks/use-trash-box"
import ConfirmModal from "@/components/modals/confirm-modal"
import Spinner from "@/components/providers/spinner"
import { Input } from "@/components/ui/input"
import { Search, Trash, Undo } from "lucide-react"

const TrashBox = () => {
  const { documents, setSearch, onRestore, search, onRemove, filteredDocuments, onClick } =
    useTrashBox()

  if (typeof documents === "undefined") {
    return (
      <div className={"h-full flex items-center justify-center p-4"}>
        <Spinner size={"lg"} />
      </div>
    )
  }

  return (
    <div className={"text-sm"}>
      <div className={"flex items-center gap-x-1 p-2"}>
        <Search className={"h-4 w-4"} />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='h-7 px-2 focus-visible:ring-transparent bg-secondary'
          placeholder='Filter by page title...'
        />
      </div>
      <div className={"mt-2 px-1 pb-2"}>
        <p className={"hidden last:block text-xs text-center text-muted-foreground"}>
          No documents found.
        </p>
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role='button'
            onClick={() => onClick(document._id)}
            className='text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between'
          >
            <span className='truncate pl-2'>{document.title}</span>
            <div className='flex items-center'>
              <div
                onClick={(e) => onRestore(e, document._id)}
                role='button'
                className='rounded-sm p-2 hover:bg-neutral-200'
              >
                <Undo className={"h-4 w-4 text-muted-foreground"} />
              </div>
              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div role='button' className='rounded-sm p-2 hover:bg-neutral-200'>
                  <Trash className={"h-4 w-4 text-muted-foreground"} />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrashBox
