"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Divide } from "lucide-react"

interface UserData {
  name: string
  email: string
  phone?: string
}

export const Test = () => {
  const [post, setPosts] = useState<UserData[]>([])

  const [createPost, setCreatePost] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    axios.get('http://0.0.0.0/api/student')
      .then(res => {
        setPosts(res.data.student)
      })
  }, [])

  console.log(post);

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://0.0.0.0/api/student', createPost);
      console.log('POSTリクエスト成功:', response.data);
    } catch (error) {
      console.error('POSTリクエストエラー:', error);
    }
  }

  if (!post) return
  return (
    <div>
      {post ?
        <div>{post.map((data, index) =>
          <div key={index}>
            <div>{data.name}</div>
          </div>
        )}
        </div>
        :
        <div></div>
      }

      <div></div>
    </div>
  )
}