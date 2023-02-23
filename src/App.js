
import './App.css';
import React, {useState, useEffect} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList'

const dummyList = [
  {
    id:1,
    author:"Tyler",
    content:"HIHI",
    emotion:5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:"Helloooloo",
    content:"HIHI",
    emotion:5,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:"NONONO",
    content:"HIHI",
    emotion:5,
    created_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  )
}

export default App;
