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
      <nav className="text-2xl font-bold flex flex-col cursor-pointer select-none text-right justify-end fixed w-42 pt-8 pr-8 right-0">
        <button
          onClick={handleClick}
          className="text-3xl font-bold flex justify-end"
        >
          {menuToggle ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
        </button>
        {menuToggle && (
          <ul>
            <li>
              <Link href="/" className="hover:italic">
                {pathname === '/' ? '_ home' : 'home'}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:italic">
                {pathname === '/about' ? '_ about' : 'about'}
              </Link>
            </li>
            <li>
              <Link href="/projects/the-mighty-bush" className="hover:italic">
                {pathname?.split('/')[1] === 'projects'
                  ? '_ projects'
                  : 'projects'}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:italic">
                {pathname === '/contact' ? '_ contact' : 'contact'}
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
