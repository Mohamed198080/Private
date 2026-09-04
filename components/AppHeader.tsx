'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
export default function AppHeader(){const router=useRouter();async function signOut(){await createClient().auth.signOut();router.replace('/login')}return <header className="topbar"><div className="brand">نظام الأعمال الميدانية</div><div className="actions"><Link className="btn" href="/">السجلات</Link><Link className="btn btn-primary" href="/records/new">+ سجل جديد</Link><button className="btn" onClick={signOut}>خروج</button></div></header>}
