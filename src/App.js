import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let navigate = useNavigate();
  
  return (
    <div className="App">

      <div className="SideBar">
        <div className="user">
          UserName : 홍길동
        </div>
      </div>

      <div className="Content">
        <Routes>
          <Route>
            
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
