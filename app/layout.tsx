import './globals.css'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="flex justify-between items-start w-full p-8 absolute">
          <Header />
          <Nav />
        </header>
        <div className="flex flex-col justify-between h-screen p-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
