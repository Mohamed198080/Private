import './globals.css'

export const metadata = { title: 'نظام الأعمال الميدانية', description: 'إدارة الأعمال الميدانية والعدادات والصور والمواقع' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
