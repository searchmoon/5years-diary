import React, { useState } from 'react';


const DiaryList6 = ({setDiaryList, diaryList, list}) => {
  const [editInputValue, setEditInputValue] = useState(list.value);
  const onDeleteList = (id) => {
    setDiaryList(diaryList.filter((list) => list.id !== id))
  }
  const onEditing = (list) => {
    setDiaryList([...diaryList.filter((item) => item.id !== list.id), {
      value: list.value,
      id: list.id,
      isEdit: !list.isEdit,
    }].sort((a,b) => a.id - b.id))
  }
  const onDoneEditing = (list) => {
    setDiaryList([...diaryList.filter((item) => item.id !== list.id), {
      value: editInputValue,
      id: list.id,
      isEdit: !list.isEdit,
    }].sort((a,b) => a.id - b.id))
  }
  const onInputTextChange = (e) => {
    setEditInputValue(e.target.value)
  }

  return (
    <div>   
    <li key={list.id}>
      {list.isEdit === false ? list.value : ''}
      {list.isEdit === false ? 
        <button onClick={() => onEditing(list)}>수정</button>: 
      <>
        <input onChange={onInputTextChange} value={editInputValue}></input>
        <button onClick={() => onDoneEditing(list)}>수정완료</button>
      </>}
      
      <button onClick={() => onDeleteList(list.id)}>-</button>
      </li>
    </div>
  )
}

export default DiaryList6