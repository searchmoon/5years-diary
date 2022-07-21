import React from 'react'
import DiaryList7 from './DiaryList7';
import { useSelector } from 'react-redux';

const DiaryBoard7 = () => {
  const lists = useSelector((state) => state.seventh.lists) 
  return (
    <div>
      <h2>Diary List</h2>
      {lists.map((list) => <DiaryList7 
      list={list}
      key={list.id}
      />)}
      
    </div>
  )
}

export default DiaryBoard7