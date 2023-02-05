'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai'

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState<boolean>(true)
  const pathname = usePathname()

  function handleClick() {
    setMenuToggle(() => !menuToggle)
  }

  return (
    <>
      <nav className="text-3xl font-bold flex flex-col cursor-pointer select-none text-right justify-end w-1/6">
        <button
          onClick={handleClick}
          className="text-3xl font-bold flex justify-end"
        >
          {menuToggle ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
        </button>
        {menuToggle && (
          <>
            <Link href="/" className="hover:italic">
              {pathname === '/' ? '_ home' : 'home'}
            </Link>
            <Link href="/about" className="hover:italic">
              {pathname === '/about' ? '_ about' : 'about'}
            </Link>
            <Link href="/projects" className="hover:italic">
              {pathname === '/projects' ? '_ projects' : 'projects'}
            </Link>
            <Link href="/contact" className="hover:italic">
              {pathname === '/contact' ? '_ contact' : 'contact'}
            </Link>
          </>
        )}
      </nav>
    </>
  )
}
