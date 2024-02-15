import { useFormStatus } from 'react-dom'

export default function DeleteButton({ isDraft, formAction }) {
  const { pending } = useFormStatus()
  return (
    !isDraft && (<button
      className="flex gap-[6px] border-[1px] border-solid border-red-600 text-red-600  bg-white font-bold justify-center items-center w-28 h-10 rounded-3xl text-lg tracking-wide"
      disabled={pending}
      role="menuitem"
      formAction={formAction}
    >
      <img
        src="/cross.svg"
        width="10px"
        height="10px"
        alt=""
        role="presentation"
      />
      DELETE
    </button>)
  )
}