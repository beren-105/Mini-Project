import './App.css';
import Header from './Header'

const content = [
  {id: 'watch-0', user: 'chster', category: '음악'},
]

const category = ['전체', '음악', '실시간', '게임', '뉴스', '축구', '요리']

function App() {
  

  return (
    <>
      <Header />
      <FliterBtn 
        category = {category}
      />
    </>
  )
}


function FliterBtn(props) {
  return (
    <div className="">
    {category.map((categorys, i) => (
      <button className="p-2 bg-gray-200 m-2" key={i}>{categorys}</button>
    ))}
    </div>
  )
}


export default App;
