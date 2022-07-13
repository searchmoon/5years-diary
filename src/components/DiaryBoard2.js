import { useSelector } from 'react-redux';
import React from 'react';
import DiaryList2 from './DiaryList2';

const DiaryBoard2 = () => {
  
  const lists = useSelector((state) => state.second.lists)
  // const onEditText = (e) => {
  //   setTodoInputValue(e.target.value)
  // }

  return (
    <>
      <h2>일기목록</h2>
      {lists.map((list) => 
        <DiaryList2 key={list.id} list={list} />
      )}
    </>
  )
}

export default DiaryBoard2