import NoteEditor from '@/components/NoteEditor'
import {getNote} from '@/lib/redis';

export default async function EditPage({ params }) {
  const noteId = params.id;
  const note = await getNote(noteId)

  // 让效果更明显
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(3000);

  if (note === null) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span className="text-2xl font-bold">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <NoteEditor noteId={noteId} initialTitle={note.title} initialBody={note.content} />
}