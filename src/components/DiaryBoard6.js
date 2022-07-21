import React from 'react'
import DiaryList6 from './DiaryList6';

const DiaryBoard6 = ({diaryList, setDiaryList}) => {
  
  return (
    <div>
      <h2>Diary List</h2>
      {diaryList.map((list) => <DiaryList6 
      diaryList={diaryList}
      setDiaryList={setDiaryList}
      list={list}
      key={list.id}
      />)}
      
    </div>
  )
}

export default DiaryBoard6