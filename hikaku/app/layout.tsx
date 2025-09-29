import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pricing & Policy',
  description: '料金比較とポリシー',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
