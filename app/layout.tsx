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
        <div className="flex flex-col justify-between h-screen p-4 z-0">
          <header className="flex justify-between items-start p-8 z-1 fixed">
            <Header />
          </header>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
