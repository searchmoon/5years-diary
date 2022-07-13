import React, { useState } from 'react'
import styled from 'styled-components';
import { deleteTodoList, doneTodoList, editTodoList } from '../features/secondSlice';
import { useDispatch } from 'react-redux';
const DiaryList2 = ({list}) => {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(list.value);
  const [listEditing, setListEditing] = useState(false);

  const onDoneList = (list) => {
    dispatch(doneTodoList({
      value: list.value,
      id: list.id,
      isDone: !list.isDone,
    }))
  }
  const onEditing = () => {
    setListEditing(!listEditing);
  }
  const onEditText = (e) => {
    setEditText(e.target.value)
  }
  const onDoneEditing = (list) => {
    dispatch(doneTodoList({
      value: editText,
      id: list.id,
      isDone: list.isDone,
    }))
    setListEditing(!listEditing);
  }
  return (
    <div>
      <Li isDone={list.isDone} key={list.id}>
          {listEditing? <input onChange={onEditText} value={editText}></input>: list.value}
          {listEditing ? 
          <button onClick={() => onDoneEditing(list)}>수정완료</button>:
          <button onClick={() => onEditing(list)}>수정</button>
          }
          <button onClick={() => onDoneList(list)}>완료</button>
          <button onClick={() => dispatch(deleteTodoList(list))}>-</button>
        </Li>
    </div>
  )
}
const Li = styled.li`
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`
export default DiaryList2