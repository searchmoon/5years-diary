import React, { useState } from 'react'
import DiaryBoard6 from './components/DiaryBoard6';
const App6 = () => {
  const [inputValue, setInputValue] = useState('');
  const [diaryList, setDiaryList] = useState([]);
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const onAddDiaryList = () => {
    setDiaryList([...diaryList, {
      value:inputValue,
      id: new Date().getTime(),
      isEdit: false,
    }])
  setInputValue('');
  }
  const onEnterKeyUp = (e) => {
    if(e.key === 'Enter'){
      onAddDiaryList();
    }
  }
  
  return (
    <div>
      <input type="text" onKeyUp={onEnterKeyUp} value={inputValue} onChange={onInputChange}></input>
      <button onClick={onAddDiaryList}>+</button>
      <DiaryBoard6 diaryList={diaryList} setDiaryList={setDiaryList} />
      
    </div>
  )
}

export default App6