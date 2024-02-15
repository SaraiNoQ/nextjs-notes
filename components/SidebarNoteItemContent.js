'use client';

import { useState, useRef, useEffect, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function NoteItemContent({
  id,
  title,
  children,
  expandedChildren,
}) {
  const router = useRouter()
  const pathname = usePathname()
  const selectedId = pathname?.split('/')[2] || null
  
  const [isPending] = useTransition()
  const [isExpanded, setIsExpanded] = useState(false)
  const isActive = id === selectedId

  // Animate after title is edited.
  const itemRef = useRef(null);
  const prevTitleRef = useRef(title);

  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current.classList.add('flash');
    }
  }, [title]);

  return (
    <div
      ref={itemRef}
      onAnimationEnd={() => {
        itemRef.current.classList.remove('flash');
      }}
      className={[
        'relative p-2 pl-4 rounded border-2 min-h-24',
        isActive ? 'border-solid border-blue-400 bg-blue-100' : ''
      ].join(' ')}>
      {children}
      <button
        className="absolute top-0 left-0 h-full w-4/5 bg-transparent"
        onClick={() => {
          router.push(`/note/${id}`)
        }}></button>

      <button
        className="absolute top-4 right-5"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}>
        {isExpanded ? (
          <img
            src="/chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
}