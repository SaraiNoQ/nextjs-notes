export default function NoteListSkeleton() {
  return (
    <div>
      <ul className="notes-list skeleton-container">
        <li className="w-full bg-note-list-bg min-h-24 rounded-md mt-4">
        </li>
        <li className="w-full bg-note-list-bg min-h-24 rounded-md mt-4">
        </li>
        <li className="w-full bg-note-list-bg min-h-24 rounded-md mt-4">
        </li>
      </ul>
    </div>
  );
}