import React, { useState } from 'react';
import DiaryBoard3 from './components/DiaryBoard3';

const App3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [diaryList, setDiaryList] = useState([]);
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const onAddList = () => {
    setDiaryList([...diaryList, {
      value: inputValue,
      id: new Date().getTime(),
      isDone: false,
    }])
    setInputValue('');
  }
  const onEnterKeyUp = (e) => {
    if(e.key == 'Enter'){
      onAddList();
    }
  }
  return (
    <>
      <input type="text" value={inputValue} onKeyUp={onEnterKeyUp} onChange={onInputChange}></input>
      <button type="submit" onClick={onAddList}>+</button>
      <DiaryBoard3 diaryList={diaryList} setDiaryList={setDiaryList} />
    </>
  )
}

export default App3