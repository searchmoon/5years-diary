import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import DiaryBoard4 from './components/DiaryBoard4';
import { addDiaryList } from './features/fourthSlice';
const App4 = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onTextChange = (e) => {
    setInputValue(e.target.value);
  } 
  const onAddDiaryList = () => {
    dispatch(addDiaryList({
      value: inputValue,
      id: new Date().getTime(),
    }));
    setInputValue('');
  }
  return (
    <>
      <input type="text" value={inputValue} onChange={onTextChange}></input>
      <button type="submit" onClick={onAddDiaryList}>+</button>
      <h2>오늘의 세줄일기</h2>
      <DiaryBoard4 />
    </>
  )
}

export default App4