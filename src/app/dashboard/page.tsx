import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div dir="rtl" style={{ 
      minHeight: '100vh', 
      background: '#030b15',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Heebo, sans-serif',
      color: '#e2e8f0'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>
          ברוך הבא! 👋
        </h1>
        <p style={{ color: '#475569' }}>{user.email}</p>
      </div>
    </div>
  )
}