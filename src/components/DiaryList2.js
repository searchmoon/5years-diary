import React from 'react'
import styled from 'styled-components';

const DiaryList2 = ({list, setDiaryLists, diaryLists}) => {
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
  return (
    <div>
      <Li isDone={list.isDone} key={list.id}>
          {list.editing? <input value={list.value}></input>: list.value}
          {list.editing ? 
          <button onClick={() => onEditing(list)}>수정완료</button>:
          <button onClick={() => onEditing(list)}>수정</button>
          }
          <button onClick={() => onDoneList(list)}>완료</button>
          <button onClick={() => onDeleteList(list)}>-</button>
        </Li>
    </div>
  )
}
const Li = styled.li`
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`
export default DiaryList2