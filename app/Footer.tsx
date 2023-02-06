import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-end w-full p-8 gap-9 select-none">
      <p className="text-2xl self-center font-light tracking-widest">
        <Link href="/">SOFTWARE DEVELOPER</Link>
      </p>

      <p className="text-5xl font-bold tracking-wide">
        <Link href="/">SMART </Link>
      </p>
    </footer>
  )
}
