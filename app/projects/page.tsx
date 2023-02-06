import Window from '../../components/Window'
import WindowNav from '@/components/WindowNav'

export default function Projects() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-end mt-10">
      <div className="w-2/3 h-4/5 self-center">
        <WindowNav />
        <Window />
      </div>
    </main>
  )
}
