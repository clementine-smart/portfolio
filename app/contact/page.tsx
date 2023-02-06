import WindowNav from '@/components/WindowNav'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <WindowNav />
    </main>
  )
}
