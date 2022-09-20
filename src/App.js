import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Category } from './Category';
import {Record} from "./Record"

function App() {
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <div className="navBar">
        <span onClick={()=>{navigate('/')}}>Home</span>
        <span onClick={()=>{navigate('intro')}}>Intro</span>
        <span onClick={()=>{navigate('/category')}}>Category</span>
        <span onClick={()=>{navigate('/content/0')}}>Record</span>
      </div>
      <div className="Contents" style={{display:'block'}}>
        <Routes>
          <Route path='/' element={<div>메인 페이지입니다. 상단에서 컨텐츠를 선택하세요.</div>}/>
          <Route path='/intro' element={<div>ㅎㅇ</div>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/content/:address' element={<Record/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;