import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import type { Project } from './WindowNav'

export interface Props {
  projectDetails: {
    name: string
    id: string
    link: string
    project: Project
    setProject: Dispatch<SetStateAction<Project>>
  }
}

function ProjectNavButton({ projectDetails }: Props) {
  const { name, id, link, project, setProject } = projectDetails

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const projectName = e.currentTarget.id
    if (projectName == 'the-mighty-bush' || projectName == 'book-the-book') {
      setProject(() => projectName)
    }
  }
  return (
    <Link href={`/projects/${link}`}>
      <button
        id={link}
        className={`px-6 h-7 border-x-2 border-t-2 border-black rounded-t ${
          project == link ? 'bg-[#E1ECF2]' : 'bg-[#DDE1EB80]'
        }`}
        onClick={handleClick}
      >
        {name}
      </button>
    </Link>
  )
}

export default ProjectNavButton
