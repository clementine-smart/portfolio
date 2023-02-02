'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)

  function handleClick() {
    setMenuToggle(() => !menuToggle)
  }

  return (
    <>
      <nav className="text-3xl font-bold flex flex-col cursor-pointer select-none text-right w-1/6">
        <button onClick={handleClick} className="text-3xl font-bold text-right">
          -
        </button>
        {menuToggle && (
          <>
            <Link href="/" className="hover:italic">
              home
            </Link>
            <Link href="/about" className="hover:italic">
              about
            </Link>
            <Link href="/projects" className="hover:italic">
              projects
            </Link>
            <Link href="/contact" className="hover:italic">
              contact
            </Link>
          </>
        )}
      </nav>
    </>
  )
}
