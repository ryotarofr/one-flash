"use client"

import { redirect } from "next/navigation"

const SettingPage = () => {
  // ローカルストレージからデータを取得
  const userDataString = localStorage?.getItem('userData');
  const localUserData = userDataString ? JSON.parse(userDataString) : null;
  if (!localUserData?.id) {
    redirect("/login")
  }
  return (
    <div>
      <div>localData{localUserData.email}</div>
    </div>
  )
}

export default SettingPage