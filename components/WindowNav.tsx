'use client'
import { useState } from 'react'

import ProjectNavButton from '@/app/projects/ProjectNavButton'

function WindowNav() {
  const [project, setProject] = useState<'bush' | 'book'>('bush')

  return (
    <nav className="w-full flex justify-start gap-2 ml-2">
      <ProjectNavButton
        projectDetails={{
          name: 'the mighty bush',
          id: 'bush',
          project,
          setProject,
        }}
      />
      <ProjectNavButton
        projectDetails={{
          name: 'book the book',
          id: 'book',
          project,
          setProject,
        }}
      />
    </nav>
  )
}

export default WindowNav
