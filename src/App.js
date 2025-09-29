import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 톡학']);
  let post = '강남 우동 맛집';
  let [따봉, 따봉변경] = useState(0);

function 함수(){
  console.log(1);
  return(
    따봉변경(따봉+1)
    );
}


function 제목정렬하기(){
  console.log("제목정렬하기");
  var newArray =[...글제목]; 
  newArray[0] = '강남 우동 맛집'
  newArray[1] = '여자코트 추천'
  newArray[2] = '파이썬 독학'
  글제목변경(newArray);
}

  return (
    <div className="App">
      <div className="black-nev">
        <h4>개발 블로그</h4>
      </div>



      <button onClick={ 제목정렬하기 }> 버튼</button>

      <div className="list">
        <h4> { 글제목[0] } <span onClick={함수}> 👍 </span> {따봉} </h4>
      <p>2월 17일 발행</p>
      </div>

      <div className="list">  
        <h4> { 글제목[1] } </h4>
      <p>2월 17일 발행</p>
      </div>

        <div className="list"> 
        <h4> { 글제목[2] } </h4>
      <p>2월 17일 발행</p>
      </div>
    
    <Modal></Modal>
    
    </div>
    
  );
}

function Modal(){
  return (
        <div className="modal">
      <h2>날짜</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
