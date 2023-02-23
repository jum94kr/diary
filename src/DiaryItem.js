const DiaryItem = ({onDelete, author, content, created_date, emotion, id}) => {
    return ( 
    <div className="DiaryItem">
        <div className="info">
         <span> 
            Author : {author} | Emotion Rate : {emotion}
         </span>
         <br></br>
         <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>  
        <button 
            onClick={()=> {
                if (window.confirm(`${id} will be deleted`)) {
                    onDelete(id);
                }
                   
        }}>
            Delete</button>
        </div>

    );
};

export default DiaryItem