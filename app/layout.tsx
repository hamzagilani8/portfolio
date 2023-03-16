
import Navbar from '@/components/navbar'
import { personalData } from '@/data/presonalData'
import './globals.css'

export const metadata = {
  title: 'Syed Hamza Gilani',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="bg-white-light" >
        <Navbar/>
      {children}
      </body>
    </html>
  )
}
