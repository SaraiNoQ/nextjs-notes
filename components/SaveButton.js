import { useFormStatus } from 'react-dom'

export default function SaveButton({ formAction }) {
  const { pending } = useFormStatus()
  return (
    <button
      className="flex gap-[6px] text-white font-bold justify-center items-center w-28 h-10 rounded-3xl bg-button-blue text-lg tracking-wide"
      disabled={pending}
      type="submit"
      role="menuitem"
      formAction={formAction}
    >
      <img
        src="/checkmark.svg"
        width="12px"
        height="10px"
        alt=""
        role="presentation"
      />
      {pending ? 'LOADING': 'DONE'}
    </button>
  )
}