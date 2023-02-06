import { Dispatch, SetStateAction } from 'react'

export interface Props {
  projectDetails: {
    name: string
    id: string
    project: 'book' | 'bush'
    setProject: Dispatch<SetStateAction<'bush' | 'book'>>
  }
}

function ProjectNavButton({ projectDetails }: Props) {
  const { name, id, project, setProject } = projectDetails

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const projectName = e.currentTarget.id
    if (projectName == 'bush' || projectName == 'book') {
      setProject(() => projectName)
    }
  }
  return (
    <button
      id={id}
      className={`px-6 h-7 border-t-2 border-x-2 border-black rounded-t ${
        project == id ? 'bg-[#E1ECF2]' : 'bg-[#DDE1EB80]'
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default ProjectNavButton
