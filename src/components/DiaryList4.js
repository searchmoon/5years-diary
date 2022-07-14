import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { deleteList, editList, doneEditList } from '../features/fourthSlice';

const DiaryList4 = ({list}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(list.value);
  const dispatch = useDispatch();
  const onEditList = () => {
    setIsEditing(!isEditing);
  }
  const onDeleteList = (list) => {
    dispatch(deleteList(list));
  }
  const onEditText = (e) => {
    setEditText(e.target.value);
  }
  const onDoneEditList = (list) => {
    dispatch(doneEditList({
      value: editText,
      id: list.id,
    }))
    setIsEditing(!isEditing);
  }
  return (
    <>
      <li key={list.id}>
        {isEditing? '' : list.value}
        {isEditing ? 
        <>
          <input value={editText} onChange={onEditText}></input>
          <button onClick={() => onDoneEditList(list)}>수정완료</button>
        </>:
        <button onClick={onEditList}>수정</button>}
        
        <button onClick={() => onDeleteList(list)}>-</button>
      </li>
    </>
  )
}

export default DiaryList4