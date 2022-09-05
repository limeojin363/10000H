import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <div className="navBar">
        <div className="navBack" onClick={()=>{navigate(-1)}}>
          &#60;	
        </div>
        <span className="navTitle" onClick={()=>{navigate('/')}}>
          <span className="mainTitle">1만 시간의 법칙</span>
          <span className="subTitle">The law of 10,000 hours</span>
        </span>
        <div className="navGo" onClick={()=>{navigate(1)}}>
          &#62;	
        </div>
      </div>
      <div className="AppMain">
        <Routes>
          <Route path='/' element={<div>fasdfsd</div>}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
