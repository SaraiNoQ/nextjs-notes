import dayjs from 'dayjs';
import NotePreview from '@/components/NotePreview'
import EditButton from '@/components/EditButton'

export default function Note({ noteId, note }) {
  const { title, content, updateTime } = note

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-row gap-4 w-3/5 justify-between items-center mt-16 mb-10">
        <div className='flex flex-col w-full'>
          <small className="text-sm" role="status">
            Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
          </small>
          <h1 className="text-4xl font-bold tracking-wide mt-4 max-w-[90%] break-all line-clamp-3">{title}</h1>
        </div>
        
        <div className="" role="menubar">
          <EditButton noteId={noteId}>EDIT</EditButton>
        </div>
      </div>

      <NotePreview width={true}>{content}</NotePreview>
    </div>
  )
}