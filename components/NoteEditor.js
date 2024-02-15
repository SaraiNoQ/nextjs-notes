'use client'

import { useState } from 'react'
import NotePreview from '@/components/NotePreview'
import { useFormStatus } from 'react-dom'

export default function NoteEditor({
  noteId,
  initialTitle,
  initialBody
}) {

  const { pending } = useFormStatus()
  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const isDraft = !noteId

  return (
    <div className="flex flex-row w-full h-full">
      <form className="flex w-1/2 flex-col items-center gap-4 mt-16" autoComplete="off">
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
      </form>
      
      <div className="w-1/2 h-full pb-4 mt-16">
        <form className="flex w-4/5 flex-row justify-end gap-3" role="menubar">
          <button
            className="flex gap-[6px] text-white font-bold justify-center items-center w-24 h-10 rounded-2xl bg-button-blue text-lg tracking-wide"
            disabled={pending}
            type="submit"
            role="menuitem"
          >
            <img
              src="/checkmark.svg"
              width="12px"
              height="10px"
              alt=""
              role="presentation"
            />
            DONE
          </button>
          {!isDraft && (
            <button
              className="flex gap-[6px] border-[1px] border-solid border-red-600 text-red-600  bg-white font-bold justify-center items-center w-28 h-10 rounded-2xl text-lg tracking-wide"
              disabled={pending}
              role="menuitem"
            >
              <img
                src="/cross.svg"
                width="10px"
                height="10px"
                alt=""
                role="presentation"
              />
              DELETE
            </button>
          )}
        </form>
        <div className="w-[108px] mt-4 bg-button-skyblue text-lg text-center text-button-blue rounded-xl font-bold" role="status">
          PREVIEW
        </div>
        <h1 className="font-bold text-3xl my-6">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  )
}