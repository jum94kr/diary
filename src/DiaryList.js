import DiaryItem from "./DiaryItem.js";

const DiaryList = ({onDelete, diaryList}) => {
    console.log(diaryList);
    return (
     <div className="DiaryList">
        <h2>Diary history</h2>
        <h4>{diaryList.length} Diary are listed</h4>
        <div>
            
            {diaryList.map((it)=> (     
                <DiaryItem key={it.id} {...it} onDelete={onDelete}/>    
               ))}

        </div>
   
    </div>
   
  );

};
DiaryList.defaultProps={
    diaryList:[]
}

export default DiaryList