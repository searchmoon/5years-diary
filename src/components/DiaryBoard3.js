import React from 'react'
import DiaryList3 from './DiaryList3'

const DiaryBoard3 = ({ diaryList, setDiaryList}) => {
  
  return (
    <>
      <h2>오늘의 세줄일기</h2>
      {diaryList.map((list) => 
      <DiaryList3 
      key={list.id}
      list={list} 
      diaryList={diaryList} 
      setDiaryList={setDiaryList}/>)}
    </>
  )
}

export default DiaryBoard3