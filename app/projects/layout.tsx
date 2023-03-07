import WindowNav from '@/components/WindowNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-full flex flex-col justify-center items-end mt-10">
      <div className="w-2/3 h-4/5 self-center">
        <WindowNav />
        <div
          className={`w-full h-full rounded-b bg-[#ccd5e0] border-2 border-black`}
        >
          {children}
        </div>
      </div>
    </main>
  )
}
