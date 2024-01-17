"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useUserSessionStore from '@/hooks/use-user-session'
import { http } from '@/lib/axios'




export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const { setUserData } = useUserSessionStore()

  const login = () => {
    setUserData({ id: null, email: null })
    http.get('/sanctum/csrf-cookie').then((res) => {
      http.post('/api/login', { email, password }).then((res) => {
        console.log(res);  //開発用
        if (res.data) {
          setUserData({ id: res.data.id, email: res.data.email })
          localStorage.setItem('userData', JSON.stringify({ id: res.data.id, email: res.data.email }));
          router.push("/setting");
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
      console.log(res); //開発用
      setUserData({ id: null, email: null })
      localStorage.removeItem('userData');
    })
  }

  const register = () => {
    http.get('/sanctum/csrf-cookie').then((res) => {
      http.post('/api/register', { email, password }).then((res) => {
        console.log(res); //開発用
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
      console.log("user", res); //開発用

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
