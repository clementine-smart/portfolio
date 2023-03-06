import WindowNav from '@/components/WindowNav'
import Projects from './page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-full flex flex-col justify-center items-end mt-10">
      <div className="w-2/3 h-4/5 self-center">
        <WindowNav />
        <Projects />
        <div
          className={`w-full h-full rounded bg-[#DDE1EB80] border-2 border-black`}
        >
          <div
            className={`w-full h-7 bg-[#E1ECF2] rounded-t border-b-2 border-black`}
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
