'use client'

import { ButtonHTMLAttributes, useState } from 'react'

function WindowNav() {
  const [project, setProject] = useState<'bush' | 'book'>('bush')

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const projectName = e.currentTarget.id
    if (projectName == 'bush' || projectName == 'book') {
      setProject(() => projectName)
    }
  }

  return (
    <nav className="w-full flex justify-center items-center gap-2">
      <button
        id="book"
        className="p-2 border-2 border-black rounded-t"
        onClick={handleClick}
      >
        book the book
      </button>
      <button
        id="bush"
        className="p-2 border-2 border-black rounded-t"
        onClick={handleClick}
      >
        the mighty bush
      </button>
    </nav>
  )
}

export default WindowNav
