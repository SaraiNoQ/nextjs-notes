import SidebarNoteItem from "./SidebarNoteItem"

export default async function NoteList({notes}) {
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
        <li key={noteId} className="w-full bg-note-list-bg h-24 rounded mt-4">
          <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
        </li>
      )
    })}
  </ul>
}