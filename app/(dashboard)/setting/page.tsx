"use client"

import { FetchUserSession } from "@/components/Auth/fetch-user-settion"
import useUserSessionStore from "@/hooks/use-user-session"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const SettingPage = () => {
  const { userData } = useUserSessionStore()

  useEffect(() => {
    if (!document.cookie) {
      redirect("/login")
    }
  }, [])

  return (
    <div>
      {userData.email}
    </div>
  )
}

export default SettingPage