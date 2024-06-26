import { Doc } from "../../convex/_generated/dataModel"
import { IconPicker } from "@/components/icon-picker"
import { Button } from "@/components/ui/button"
import { Smile, X } from "lucide-react"

interface ToolBarProps {
  initialData: Doc<"documents">
  preview?: boolean
}
export default function ToolBar({ initialData, preview }: ToolBarProps) {
  return (
    <div className='pl-[54px] group relative'>
      {!!initialData.icon && !preview && (
        <div className='flex items-center gap-x-2 group/icon pt-6'>
          <IconPicker onChange={() => {}}>
            <p className={"text-6xl hover:opacity-75 transition"}>{initialData.icon}</p>
          </IconPicker>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => {}}
            className={
              "rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
            }
          >
            <X className={"w-4 h-4"} />
          </Button>
        </div>
      )}
      {!!initialData.icon && preview && <p className={"text-6xl pt-6"}>{initialData.icon}</p>}
      <div className='opacity-100 group-hover:opacity-100 flex items-center gap-x-1 py-4'>
        {!initialData.icon && !preview && (
          <IconPicker asChild onChange={() => {}}>
            <Button className='text-muted-foreground text-xs' variant='outline' size='sm'>
              <Smile className='h-4 w-4 mr-2' />
              Add icon
            </Button>
          </IconPicker>
        )}
      </div>
    </div>
  )
}
