"use client"

import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

// Define proper type instead of 'any'
interface User {
  id: string
  email: string
  username: string
  created_at: string
  updated_at: string
  team_color: string
}

function Page() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUsers() {
      setLoading(true)
      const { data, error } = await supabase.from('users').select()

      if (error) {
        console.error("SUPABASE QUERY ERROR:", error)
        setUsers([])
      } else {
        setUsers(data ?? [])
      }

      setLoading(false)
    }

    getUsers()
  }, [])

  return (
    <>
      <p>hello</p>
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && <p>No users found</p>}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.username} — {u.email} — {u.team_color}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Page
