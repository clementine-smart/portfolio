import WindowNav from '@/components/WindowNav'
import { Inter } from '@next/font/google'
import Window from '../../components/Window'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center">
      <Window size={{ width: '2/3', height: '4/5' }} />
    </main>
  )
}
