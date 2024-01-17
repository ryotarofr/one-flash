"use client"

import { redirect } from "next/navigation"
import { useEffect, useState } from "react";

const SettingPage = () => {
  const [userData, setUserData] = useState({ id: 0, email: "" })

  useEffect(() => {
    // ローカルストレージからデータを取得
    if (typeof window !== 'undefined') {
      const userDataString = localStorage?.getItem('userData');
      const localUserData = userDataString ? JSON.parse(userDataString) : null;
      if (!localUserData?.id) {
        redirect("/login")
      } else {
        setUserData(localUserData)
      }
    }
  }, [])
  return (
    <div>
      <div>localData{userData.email}</div>
    </div>
  )
}

export default SettingPage