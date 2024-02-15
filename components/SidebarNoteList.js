import SidebarNoteItem from "./SidebarNoteItem"
import { getAllNotes } from "@/lib/redis"

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
  return <ul className="w-full h-full">
    {arr.map(([noteId, note]) => {
      return (
        <li key={noteId} className="w-full bg-note-list-bg min-h-24 rounded-md mb-4">
          <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
        </li>
      )
    })}
  </ul>
}