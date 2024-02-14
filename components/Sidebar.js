import React, {Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SidebarNoteList from "@/components/SidebarNoteList"
import NoteListSkeleton from './NoteListSkeleton'

export default async function Sidebar() {
  return (
    <div className='w-1/4 min-w-[296px] h-full bg-white shadow'>
      <section className="flex flex-col items-start w-full mt-8 pl-3">
        <Link href={'/'} className="">
          <section className="flex gap-3 justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={22}
              height={30}
              priority
            />
            <p className='text-2xl font-bold text-logo-blue tracking-wider underline'>REACT NOTES</p>
          </section>
        </Link>
        <section className="" role="menubar">
            {/* SideSearchField */}
        </section>
        <nav className='w-11/12'>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </div>
  )
}