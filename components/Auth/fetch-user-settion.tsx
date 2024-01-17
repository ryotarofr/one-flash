"use client"

import useUserSessionStore from "@/hooks/use-user-session";
import { http } from "@/lib/axios";
import { useEffect } from "react"



export const FetchUserSession = () => {
  const { setUserData } = useUserSessionStore()
  useEffect(() => {
    setUserData({ id: null, email: null })
    http.get('http://localhost/api/user').then((res) => {
      setUserData({ id: res.data.id, email: res.data.email })
    }).catch(() => {
      return
    })
  }, [
    setUserData
  ])
  return null
}