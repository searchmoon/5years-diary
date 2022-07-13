import React, { useState } from 'react';
import DiaryBoard2 from './components/DiaryBoard2';
import { useDispatch } from 'react-redux';
import { addTodoList } from './features/secondSlice';
const App2 = () => {
  const [textValue, setTextValue] = useState('');
  // const [diaryLists, setDiaryLists] = useState([]);
  // const [todoInputValue, setTodoInputValue] = useState(textValue);
  const dispatch = useDispatch();
  const onTextChange = (e) => {
    setTextValue(e.target.value);
  }  
  const onAddBtnClick = (e) => {
    dispatch(addTodoList({
      value: textValue,
      id: new Date().getTime(),
      isDone: false,
      editing: false,
    }))
    setTextValue('');
  }
  const handleOnKeyUp = (e) => {
    if(e.key == 'Enter'){
      onAddBtnClick();
    }
  }
  
  return (
    <>
      <input type="text" onKeyUp={handleOnKeyUp} value={textValue} onChange={onTextChange}></input>
      <button onClick={onAddBtnClick}>+</button>
      <DiaryBoard2 />
    </>
  )
}

export default App2