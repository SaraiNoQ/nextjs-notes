'use client'

import { useSearchParams } from 'next/navigation'
import { Children } from 'react';

export default function SidebarNoteListFilter({ children }) {
  const searchParams = useSearchParams()
  const searchText = searchParams.get('q')

  console.log('child', children)
  return (
    <ul className="w-full h-full">
      {Children.map(children, (child, index) => {
        const title = child.props.title;
        if (!searchText || (searchText && title.toLowerCase().includes(searchText.toLowerCase()))) {
          return <li key={index} className='w-full bg-note-list-bg min-h-24 rounded-md mb-4'>{child}</li>
        }
        return null
      })}
      {/* {children.map((e, i) => {
        const title = e.props.title;
        if (!searchText || (searchText && title.toLowerCase().includes(searchText.toLowerCase()))) {
          return <li key={i} className='w-full bg-note-list-bg min-h-24 rounded-md mb-4'>{e}</li>
        }
        return null
      })} */}
    </ul>
  )
}