import { useState } from 'react';
import './App.css';

function App() {
  let [글제목,b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 톡학']);
  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nev">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4> { 글제목 } </h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">  
        <h4> { 글제목 } </h4>
      <p>2월 17일 발행</p>
      </div>
        <div className="list">
        <h4> { 글제목 } </h4>
      <p>2월 17일 발행</p>
      </div>
    </div>
    
  );
}

export default App;
