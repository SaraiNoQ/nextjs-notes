import Link from 'next/link'

export default function EditButton({noteId, children}) {
  const isDraft = noteId == null;
  return (
    <Link
      href={`/note/edit/${noteId || ''}`}
      className={[
        "flex justify-center items-center w-20 h-10 rounded-2xl",
        isDraft ? 'bg-button-blue' : 'bg-white border-2 border-button-blue border-solid'
      ].join(" ")}>
      <button
        className={[
          'text-lg font-bold tracking-widest',
          isDraft ? 'text-white' : 'text-button-blue',
        ].join(' ')}
        role="menuitem">
        {children}
      </button>
    </Link>
  );
}