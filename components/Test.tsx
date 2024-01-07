"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export const Test = () => {
  const [post, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://0.0.0.0/api/student')
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  console.log(post);

  return (
    <div>

    </div>
  )
}