import React, {Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SidebarNoteList from "@/components/SidebarNoteList"
import NoteListSkeleton from '@/components/NoteListSkeleton'
import EditButton from '@/components/EditButton'
import SidebarSearchField from '@/components/SidebarSearchField'

export default async function Sidebar() {
  return (
    <div className='w-1/4 min-w-[296px] h-full bg-white shadow z-10'>
      <section className="flex flex-col items-start w-full h-full mt-8 pl-3">
        <Link href={'/'} className="outline-none">
          <section className="flex gap-2 justify-center items-center outline-none">
            <Image
              src="/logo.svg"
              alt="logo"
              width={26}
              height={30}
              priority
            />
            <p className='text-3xl font-bold text-logo-blue tracking-wide underline'>REACT NOTES</p>
          </section>
        </Link>
        <section className="flex flex-row gap-2 mt-4 w-[90%]" role="menubar">
            <SidebarSearchField />
            <EditButton noteId={null}>NEW</EditButton>
        </section>
        <nav className='w-11/12 h-5/6 overflow-y-auto mt-4'>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </div>
  )
}