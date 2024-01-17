"use client"

import useUserSessionStore from "@/hooks/use-user-session";
import axios from "axios";
import { useEffect } from "react"

const http = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true,
});


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