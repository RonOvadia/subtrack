import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SubTrack',
  description: 'מערכת ניהול מחליפים חכמה',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}