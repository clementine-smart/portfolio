'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import ProjectNavButton from '@/components/ProjectNavButton'
export type Project = 'the-mighty-bush' | 'book-the-book' | undefined

function WindowNav() {
  const pathname = usePathname()?.split('/')[2]
  const projectName: Project = narrowParams()

  function narrowParams() {
    if (pathname == 'the-mighty-bush' || pathname == 'book-the-book') {
      return pathname
    }
  }

  const [project, setProject] = useState<Project>(projectName)

  return (
    <>
      <nav className="w-full flex justify-start gap-2 ml-2">
        <ProjectNavButton
          projectDetails={{
            name: 'the mighty bush',
            id: 'bush',
            link: 'the-mighty-bush',
            project,
            setProject,
          }}
        />
        <ProjectNavButton
          projectDetails={{
            name: 'book the book',
            id: 'book',
            link: 'book-the-book',
            project,
            setProject,
          }}
        />
      </nav>
      <div
        className={`w-full h-7 bg-[#E1ECF2] rounded-t border-x-2 border-t-2 border-black`}
      ></div>
    </>
  )
}

export default WindowNav
