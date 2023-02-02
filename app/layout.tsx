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
        <div className="flex flex-col justify-between h-screen">
          <header className="flex justify-between w-full p-8">
            <Header />
            <Nav />
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
