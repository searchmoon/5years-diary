import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editList, doneEditList, deleteList } from '../features/seventhSlice';

const DiaryList7 = ({list}) => {
  const [editInputValue, setEditInputValue] = useState(list.value);
  const dispatch = useDispatch();

  const onEditing = (list) => {
    dispatch(editList({
      value: list.value,
      id: list.id,
      isEdit: !list.isEdit,
    }))
  }
  const onDoneEditing = (list) => {
    dispatch(doneEditList({
      value: editInputValue,
      id: list.id,
      isEdit: !list.isEdit,
    }))
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
      
      <button onClick={() => dispatch(deleteList(list.id))}>-</button>
      </li>
    </div>
  )
}

export default DiaryList7