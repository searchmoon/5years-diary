import React, { useState } from 'react';
import DiaryBoard2 from './components/DiaryBoard2';
const App2 = () => {
  const [textValue, setTextValue] = useState('');
  const [diaryLists, setDiaryLists] = useState([]);
  // const [todoInputValue, setTodoInputValue] = useState(textValue);
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
  
  return (
    <>
      <input type="text" onkeyup={handleOnKeyPress} value={textValue} onChange={onTextChange}></input>
      <button onClick={onAddBtnClick}>+</button>
      <DiaryBoard2 diaryLists={diaryLists} setDiaryLists={setDiaryLists}/>
    </>
  )
}

export default App2