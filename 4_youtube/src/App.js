import React, { useState, useEffect, createContext, useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"

import './App.css';
import Header from './header/Header'
import Popular from './content/Popular'
import Login from './login/Login'
import SideBar from "./header/SideBar";
import AuthProvider from "./login/AuthProvider";


const category = ['전체', '음악', '실시간', '게임', '뉴스', '축구', '요리']
const apiKey = process.env.REACT_APP_API_KEY

// 데이터 가져오기
function fetchData() {
  const promise = fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=${apiKey}`)
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json()
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
            <Route index element={<Home
              AuthContext={AuthContext}
              data={data}
            />} />
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

  const [clickSideMenu, setClickSideMenu] = useState(false)
  
  console.log(clickSideMenu)
  return (
    <>
      <Header
        category = {category}
        auth = {auth}
        clickSideMenu = {clickSideMenu}
        setClickSideMenu = {setClickSideMenu}
      />
      <SideBar
      
      clickSideMenu = {clickSideMenu}
      setClickSideMenu = {setClickSideMenu}
      />
      <Popular
        data = {props.data}
      />
    </>
  )
}


export default App;
