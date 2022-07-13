import React, { useState } from 'react';
import styled from 'styled-components';
const App = () => {

  const [textValue, setTextValue] = useState('');
  const [diaryLists, setDiaryLists] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState(textValue);
  const onTextChange = (e) => {
    setTextValue(e.target.value);
  }  
  const onAddBtnClick = (e) => {
    e.preventDefault();
    setDiaryLists([...diaryLists, {
      value: textValue,
      id: new Date().getTime(),
      isDone: false,
      editing: false,
    }])
    setTextValue('');
  }
  const handleOnKeyPress = (e) => {
    if(e.key == 'Enter'){
      onAddBtnClick();
    }
  }
  const onDoneList = (list) => {
    setDiaryLists([...diaryLists.filter((item) => item.id !== list.id), {
      value: list.value,
      id: list.id,
      isDone: !list.isDone,
      editing: list.editing,
    }].sort((a,b) => a.id-b.id))
}
  const onDeleteList = (list) => {
    setDiaryLists(diaryLists.filter((item) => item.id !== list.id))
  }
  const onEditing = (list) => {
    setDiaryLists([...diaryLists.filter((item) => item.id !== list.id), {
      value: list.value,
      id: list.id,
      isDone: list.isDone,
      editing: !list.editing,
    }].sort((a,b) => a.id-b.id))
  }
  const onEditText = (e) => {
    setTodoInputValue(e.target.value)
  }

  return (
    <>
      <input type="text" onkeyup={handleOnKeyPress} value={textValue} onChange={onTextChange}></input>
      <button onClick={onAddBtnClick}>+</button>
      <h2>일기목록</h2>
      {diaryLists.map((list) => 
        <Li isDone={list.isDone} key={list.id}>
          {list.editing? <input onChange={() => onEditText(list)} value={list.value}></input>: list.value}
          {list.editing ? 
          <button onClick={() => onEditing(list)}>수정완료</button>:
          <button onClick={() => onEditing(list)}>수정</button>
          }
          <button onClick={() => onDoneList(list)}>완료</button>
          <button onClick={() => onDeleteList(list)}>-</button>
        </Li>
      )}
    </>
  )
}
const Li = styled.li`
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`

export default App