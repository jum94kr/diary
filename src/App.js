
import './App.css';
import React, {useRef, useState} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList'

// const dummyList = [
//   {
//     id:1,
//     author:"Tyler",
//     content:"HIHI",
//     emotion:5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"Helloooloo",
//     content:"HIHI",
//     emotion:5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"NONONO",
//     content:"HIHI",
//     emotion:5,
//     created_date: new Date().getTime()
//   }
// ]

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author,content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onDelete = (targetId) => {
    console.log(`${targetId} removed from Diary`);
    const newDiaryList = data.filter((it) => it.id !==targetId);
    setData(newDiaryList);
  };


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
