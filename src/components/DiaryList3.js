import React, { useState } from 'react'

const DiaryList3 = ({ list, diaryList, setDiaryList }) => {
  const [isEditing, setIsEditing] = useState(list.isEditing);
  const [editTextValue, setEditTextValue] = useState(list.value);
  const onDeleteList = (list) => {
    setDiaryList(diaryList.filter((item) => item.id !== list.id))
  }
  // list에 들어있는 key 1.value, 2. id, 3.isDone 4.isEditing
  // 수정은 그냥 함수로 정의해주면 된다. false true 바꾸기만 하면 되니깐!
  // 보여지는 값이 아니기 때문에 useState도 필요가없다!
  // 라고 생각했는데 아니네? isEditing => useState 사용하기!

  //수정 버튼을 눌렀을 때 onEditing이 실행되는데,
  const onEditing = () => {
    setIsEditing(!isEditing);
  }
  const onEditTextChange = (e) => {
    setEditTextValue(e.target.value)
  }
  const onDoneEdit = (list) => {
    setDiaryList([...diaryList.filter((item) => item.id !== list.id), {
      value: editTextValue,
      id: list.id,
      isDone: list.isDone,
    }].sort((a, b) => a.id-b.id))
    setIsEditing(!isEditing);
  }
  // input 창에서 enter치면 button 기능 실행하기
  const onEnterKeyUp = (e) => {
    if(e.key == 'Enter'){
      onDoneEdit(list);
    }
  }
  return (
    <>
      <li key={list.id}>
      {isEditing? '' : list.value}
      {isEditing ?
      <>
        <input type="text" onKeyUp={onEnterKeyUp} value={editTextValue} onChange={onEditTextChange}></input>
        <button onClick={() => onDoneEdit(list)}>수정완료</button>
      </> :  
      <button onClick={onEditing}>수정</button>
      }
      <button onClick={() => onDeleteList(list)}>-</button>
      </li>
    </>
  )
}

export default DiaryList3