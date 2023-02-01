import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"

import './App.css';
import Header from './Header'
import Popular from './Popular'
import SideBar from './SideBar'


// 서버에서 가져온 데이터로 가정
const contents = [
  {id: 'content-0', user: '우디', category: '음악', title: 'Say I Love You', thumbnail: 'https://i.ytimg.com/vi/C0wHFZ_B4sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCegaTzRmTWeZ-1c_T26HP-QOlTpw', src: 'https://www.youtube.com/watch?v=C0wHFZ_B4sg'},
  {id: 'content-1', user: 'chster', category: '실시간', title: '', thumbnail: 'https://i.ytimg.com/vi/KKalqB3CcS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaKCkpLN_yUn4sV8Pi6bxVoxN0pQ'},
  {id: 'content-2', user: 'chster', category: '게임', title: '', thumbnail: 'https://i.ytimg.com/vi/VBB_Amxd2-g/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBzYYgQe5RgbJxzPlUXbbm2_p5p3Q'},
  {id: 'content-3', user: 'MBCNEWS', category: '뉴스',title: '실내 마스크 해제 첫날‥시민들 표정은?', profile: 'https://yt3.ggpht.com/ytc/AL5GRJVS7X22afAWJV6tZrLItlKR4NcVOL9qulxw6pC9Zg=s48-c-k-c0x00ffffff-no-rj', thumbnail: 'https://i.ytimg.com/vi/5f6O0xpyUwo/hq720_live.jpg?sqp=CIyv2Z4G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBeLQnSD9RB-at-3GXe0GwXGcGMA', src:'https://www.youtube.com/watch?v=_PzClmeY5tk'},
  {id: 'content-4', user: 'chster', category: '축구', title: '', thumbnail: '', src: 'https://www.youtube.com/embed/8hwuKBvM2Iw'},
  {id: 'content-5', user: 'chster', category: '요리', title: '', thumbnail: ''},
]

// 데이터 가져오기
function fetchData() {
  const promise = fetch(contents)
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res
  })
  return promise
}

const category = ['전체', '음악', '실시간', '게임', '뉴스', '축구', '요리']

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

  return (
    <>
      <Header
      category = {category}
      />
      <SideBar />
      <Popular />
    </>
  )
}



export default App;
