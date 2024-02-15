'use client'

import { useState } from 'react'
import NotePreview from '@/components/NotePreview'
import { useFormState } from 'react-dom'
import { deleteNote, saveNote } from '@/app/action'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'

const initialState = {
  message: null,
}
export default function NoteEditor({
  noteId,
  initialTitle,
  initialBody
}) {

  const [saveState, saveFormAction] = useFormState(saveNote, initialState)
  const [delState, delFormAction] = useFormState(deleteNote, initialState)

  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const isDraft = !noteId

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex w-1/2 flex-col items-center gap-4 mt-16">
        <input
          className='w-4/5 border-solid border-2 border-input-border rounded outline-none h-10 text-lg pl-2 font-mono'
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          value={body}
          className='w-4/5 min-h-[60%] border-solid border-2 border-input-border rounded outline-none p-2 font-mono'
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      
      <div className="w-1/2 h-full pb-4 mt-16">
          <form autoComplete='off' className='flex w-4/5 flex-row justify-end gap-3'>
            <input type="hidden" name="noteId" value={noteId || ''} />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="body" value={body} />
            <SaveButton formAction={saveFormAction}/>
            <DeleteButton isDraft={isDraft} formAction={delFormAction}/>
          </form>
        
        <div className="w-[108px] mt-4 bg-button-skyblue text-lg text-center text-button-blue rounded-xl font-bold" role="status">
          PREVIEW
        </div>
        <h1 className="font-bold text-3xl my-6 break-all w-5/6">{title}</h1>
        <NotePreview width={null}>{body}</NotePreview>
      </div>
    </div>
  )
}