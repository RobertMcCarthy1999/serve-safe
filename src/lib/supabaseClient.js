import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://lqimvkpfnaaizgtgalar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxaW12a3BmbmFhaXpndGdhbGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMTI5MTEsImV4cCI6MjA2MzY4ODkxMX0.6x6xrcc3QzBDoPN1j1RZYJ_6zj1266qOAVCHmsTON_w'
)
