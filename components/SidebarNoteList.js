import SidebarNoteItem from "./SidebarNoteItem"
import { getAllNotes } from "@/lib/redis"

export default async function NoteList() {
  // const sleep = ms => new Promise(r => setTimeout(r, ms));
  // await sleep(2000);
  const notes = await getAllNotes();
  const arr = Object.entries(notes);
  if (arr.length === 0) {
    return (
      <div className="">
        {'No notes created yet!'}
      </div>
    )
  }
  return <ul className="w-full h-100 mt-4">
    {arr.map(([noteId, note]) => {
      return (
        <li key={noteId} className="w-full bg-note-list-bg min-h-24 rounded-md mt-4">
          <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
        </li>
      )
    })}
  </ul>
}