import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className="NavBar">
        <div className="NavTitle">1만 시간의 법칙</div>
        <div className="NavSide">
          <span onClick={()=>{alert()}}>Information</span>
          <span>MyPage</span>
        </div>
      </div>
    </div>
  );
}

export default App;
