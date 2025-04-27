import './globals.css'

export const metadata = {
  title: 'AUCA FAQ',
  description: 'Frequently Asked Questions about AUCA services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
