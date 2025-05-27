import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import '@/styles/global.css'
import { Toaster } from 'sonner'

const kumbhSans = Kumbh_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'moneytoring',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} antialiased dark:bg-gray-900 select-none`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
