import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Folders } from "./Folders"
import {Content} from "./Content"

function App() {
  let navigate = useNavigate();
  
  return (
    <div className="App">

      <div className="SideBar">
        <div className="user">
          UserName : 홍길동
        </div>
        <div className="">
          <Folders></Folders>
        </div>
      </div>

      <div className="Contents">
        <Routes>
          <Route path='/' element={<div>메인 페이지입니다. 좌측 사이드바에서 컨텐츠를 선택하세요.</div>}/>
          <Route path='/content/:ids' element={<Content></Content>}>
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
