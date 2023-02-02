import './globals.css'
import Header from './Header'
import Nav from './Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          <header className="flex justify-between w-screen m-8">
            <Header />
            <Nav />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
