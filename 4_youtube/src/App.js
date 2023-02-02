import React, { useState, useEffect, createContext, useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"

import './App.css';
import Header from './Header'
import Popular from './Popular'
import Login from './Login'
import SideBar from "./SideBar";
import AuthProvider from "./AuthProvider";


const category = ['전체', '음악', '실시간', '게임', '뉴스', '축구', '요리']

// 데이터 가져오기
function fetchData() {
  const promise = fetch('./fetchData.js')
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res
  })
  return promise
}


function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState(null)

  console.log(data)

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  // 인증
  const AuthContext = createContext()


  return (
    <>
    <Router>
      <AuthProvider AuthContext={AuthContext}>
        <Routes>
            <Route index element={<Home AuthContext={AuthContext}/>} />
            <Route path="login" element={<Login AuthContext={AuthContext} />} />
        </Routes>
      </AuthProvider>
    </Router>
    </>
  )
}

function Home(props) {
  
  const AuthContext = props.AuthContext
  const auth = useContext(AuthContext)

  return (
    <>
      <Header
        category = {category}
        auth = {auth}
      />
      <SideBar />
      <Popular />
    </>
  )
}


export default App;
