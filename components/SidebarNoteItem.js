import SidebarNoteItemContent from "./SidebarNoteItemContent"
import { formatDate } from "@/lib/Date"

export default function NoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }>
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{formatDate(updateTime)}</small>
      </header>
    </SidebarNoteItemContent>
  )
}