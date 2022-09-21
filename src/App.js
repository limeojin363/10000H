import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Category } from './Router/Category';
import {Record} from "./Router/Record"

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="navBar">
        <div className="left">
          <span style={window.location.href.includes('home')?{fontWeight:'500', color:'rgb(112, 1, 1)'}:{}} onClick={()=>{navigate('/home')}}>Home</span>
          <span style={window.location.href.includes('intro')?{fontWeight:'500', color:'rgb(112, 1, 1)'}:{}} onClick={()=>{navigate('/intro')}}>Intro</span>
          <span style={window.location.href.includes('category')?{fontWeight:'500', color:'rgb(112, 1, 1)'}:{}} onClick={()=>{navigate('/category')}}>Category</span>
          <span style={window.location.href.includes('record')?{fontWeight:'500', color:'rgb(112, 1, 1)'}:{}} onClick={()=>{navigate('/record/0')}}>Record</span>
          <span></span>
        </div>
        <div></div>
        <span className="right" onClick={()=>{alert()}}>UserPage</span>
      </div>
      <div>
        <Routes>
          <Route path='/home' element={<div>메인 페이지입니다. 상단에서 컨텐츠를 선택하세요.</div>}/>
          <Route path='/intro' element={<div>ㅎㅇ</div>}/>
          <Route path='/category' element={<div><Category/></div>}/>
          <Route path='/record/:address' element={<div><Record/></div>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;