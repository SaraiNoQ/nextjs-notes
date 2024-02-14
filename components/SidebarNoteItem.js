import SidebarNoteItemContent from "./SidebarNoteItemContent"
import { formatDate } from "@/lib/Date"

export default function NoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="mt-2 text-base text-slate-500 font-kai">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }>
      <header className="font-bold">
        <p className="block text-xl mb-1 max-w-48 truncate">{title}</p>
        <small>{formatDate(updateTime)}</small>
      </header>
    </SidebarNoteItemContent>
  )
}