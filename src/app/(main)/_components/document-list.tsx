"use client"

import React from "react"

import { Doc, Id } from "../../../../convex/_generated/dataModel"
import Item from "@/app/(main)/_components/item"
import { useDocumentList } from "@/app/(main)/_hooks/use-document-list"
import { cn } from "@/lib/utils"
import { FileIcon } from "lucide-react"

interface DocumentListProps {
  parentDocumentId?: Id<"documents">
  level?: number
  data?: Doc<"documents">[]
}

export const DocumentList = ({ parentDocumentId, level = 0 }: DocumentListProps) => {
  const { documents, expanded, onRedirect, params, onExpand } = useDocumentList(parentDocumentId)
  if (typeof documents === "undefined") {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    )
  }
  return (
    <div>
      <p
        style={{
          paddingLeft: level ? `${level * 12 + 25}px` : undefined,
        }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          level === 0 ? "hidden" : "last:block",
        )}
      >
        No pages inside
      </p>
      {documents.map((document) => (
        <div
          style={{
            marginLeft: level ? `30px` : undefined,
          }}
          key={document._id}
        >
          <Item
            id={document._id}
            onClick={() => onRedirect(document._id)}
            label={document.title}
            icon={FileIcon}
            documentIcon={document.icon}
            active={params.documentId === document._id}
            level={level}
            onExpand={() => onExpand(document._id)}
            expanded={expanded[document._id]}
          />
          {expanded[document._id] && (
            <DocumentList parentDocumentId={document._id} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  )
}

export default DocumentList
