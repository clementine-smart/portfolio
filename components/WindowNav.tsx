'use client'

import { ButtonHTMLAttributes, useState } from 'react'

function WindowNav() {
  const [project, setProject] = useState<'bush' | 'book'>('book')

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const projectName = e.currentTarget.id
    if (projectName == 'bush' || projectName == 'book') {
      setProject(() => projectName)
    }
  }

  return (
    <nav className="w-full flex justify-start gap-2 ml-2">
      <button
        id="book"
        className={`px-6 h-7 border-t-2 border-x-2 border-black rounded-t ${
          project == 'book' ? 'bg-[#E1ECF2]' : 'bg-[#DDE1EB80]'
        }`}
        onClick={handleClick}
      >
        book the book
      </button>
      <button
        id="bush"
        className={`px-6 h-7 border-t-2 border-x-2 border-black rounded-t ${
          project == 'bush' ? 'bg-[#E1ECF2]' : 'bg-[#DDE1EB80]'
        }`}
        onClick={handleClick}
      >
        the mighty bush
      </button>
    </nav>
  )
}

export default WindowNav
