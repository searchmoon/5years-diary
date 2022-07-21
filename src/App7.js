import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DiaryBoard7 from './components/DiaryBoard7';
import { addList, inputValue } from './features/seventhSlice';
const App7 = () => {
  const value = useSelector((state) => state.seventh.value) 

  const dispatch = useDispatch();
  // const [inputValue, setInputValue] = useState('');
  // const [diaryList, setDiaryList] = useState([]);
  const onInputChange = (e) => {
    dispatch(inputValue(e.target.value));
  }
  const onAddDiaryList = () => {
    dispatch(addList({
      value: value,
      id: new Date().getTime(),
      isEdit: false,
    }))
  dispatch(inputValue(''));
  }
  const onEnterKeyUp = (e) => {
    if(e.key === 'Enter'){
      onAddDiaryList();
    }
  }
  
  return (
    <div>
      <input type="text" onKeyUp={onEnterKeyUp} value={value} onChange={onInputChange}></input>
      <button onClick={onAddDiaryList}>+</button>
      <DiaryBoard7 />
      
    </div>
  )
}

export default App7