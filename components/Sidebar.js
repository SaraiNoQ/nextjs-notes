import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Sidebar() {
  return (
    <div className='w-1/3 h-full bg-white shadow'>
      <section className="w-full h-12 mt-12">
        <Link href={'/'} className="">
          <section className="flex gap-3 justify-center items-center ">
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
        <section className="sidebar-menu" role="menubar">
            {/* SideSearchField */}
        </section>
        <nav>
          {/* SidebarNoteList */}
        </nav>
      </section>
    </div>
  )
}