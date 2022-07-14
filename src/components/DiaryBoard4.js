import React from 'react'
import { useSelector } from 'react-redux'
import DiaryList4 from './DiaryList4'

const DiaryBoard4 = () => {
const lists = useSelector((state) => state.fourth.lists)
  return (
    <>
      {lists.map((list) => <DiaryList4 
      key={list.id}
      list={list}
      />)}
    </>
  )
}

export default DiaryBoard4