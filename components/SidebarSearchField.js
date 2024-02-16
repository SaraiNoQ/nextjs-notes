'use client';

import { usePathname, useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

function Spinner({active = true}) {
  return (
    <div
      className={['spinner', active && 'spinner--active'].join(' ')}
      role="progressbar"
      aria-busy={active ? 'true' : 'false'}
    />
  );
}

export default function SidebarSearchField() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isClick, setIsClick] = useState(false)

  function handleSearch(term) {
    const params = new URLSearchParams(window.location.search)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <div className="" role="search">
      <input
        className={[
          'h-10 w-full max-w-[200px] rounded-3xl px-3 outline-none border-[1px] border-solid',
          isClick ? 'border-logo-blue' : 'border-slate-300'
        ].join(" ")}
        id="sidebar-search-input"
        placeholder="Search"
        type="text"
        onFocus={() => setIsClick(true)}
        onBlur={() => setIsClick(false)}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Spinner active={isPending} />
    </div>
  );
}