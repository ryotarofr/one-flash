"use client"

// import useUserIdStore from '@/hooks/useUserIdStore'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import lscache from "lscache";

// XSRF-TOKENをリクエスト時に送信するための設定
const http = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true,
});



export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  // const { userId, setUserId } = useUserIdStore();


  const login = () => {
    http.get('/sanctum/csrf-cookie').then((res) => {
      http.post('/api/login', { email, password }).then((res) => {
        console.log(res);
        if (res.data) {
          // ポイント① lscacheを用いてlocalStorageに期限付きでログインIDを保持
          // lscache.set("loginId", JSON.stringify(res.data.id), 100); // 100分でセッション切れる
          // router.push("/profile");
          // setUserId(res.data.id);
        } else {
          console.log("error");
        }
      })
        .catch(() => {
          console.log("catch");
        })
        .finally(() => {
          console.log("finally");
        });
    })
  }

  const logout = () => {
    http.post('/api/logout').then((res) => {
      console.log(res);
    })
  }

  const register = () => {
    http.get('/sanctum/csrf-cookie').then((res) => {
      http.post('/api/register', { email, password }).then((res) => {
        console.log(res);
      })
    })
  }

  const getUsers = () => {
    http.get('http://localhost/api/users').then((res) => {
      setUsers(res.data);
    })
  }

  // このデータをグローバルステートで管理する
  const getUser = () => {
    http.get('http://localhost/api/user').then((res) => {
      console.log("user", res);

    })
  }

  const reset = () => { setUsers([]) }
  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);




  return (
    <div className="">
      <nav className='space-x-10'>
        <button onClick={login}>ログイン</button>
        <button onClick={logout}>ログアウト</button>
        <button onClick={register}>ユーザー登録</button>
        <button onClick={getUsers}>User 一覧</button>
        <button onClick={reset}>リセット</button>
        <button onClick={getUser}>ログインしてるユーザー</button>
      </nav>
      <br />
      <div>
        <label>email</label>
        <input type="text" value={email} onChange={onChangeEmail} />
        <label>password</label>
        <input type="password" value={password} onChange={onChangePassword} />
      </div>
      {/* <div>{userId}</div> */}
      <div>
        {users ?
          <div>
            {
              users.map((user: { email: string, name: string }) => {
                return (
                  <p key={user.email}>{user.email}</p>
                )
              })
            }
          </div>
          :
          <div>ユーザーはいません</div>
        }

      </div>
    </div>
  );
}
