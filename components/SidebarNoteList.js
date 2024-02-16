import { getAllNotes } from "@/lib/redis"
import SidebarNoteItem from "@/components/SidebarNoteItem"
import SidebarNoteListFilter from "@/components/SidebarNoteListFilter";

export default async function NoteList() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(1000);
  const notes = await getAllNotes();
  const arr = Object.entries(notes);
  if (arr.length === 0) {
    return (
      <div className="">
        {'No notes created yet!'}
      </div>
    )
  }
  return (
    <SidebarNoteListFilter>
      {arr.map(([noteId, note]) => {
        return <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
      })}
    </SidebarNoteListFilter>
  )
}