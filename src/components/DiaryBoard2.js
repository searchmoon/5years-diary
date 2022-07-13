import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import DiaryList2 from './DiaryList2';

const DiaryBoard2 = ({setDiaryLists, diaryLists}) => {
  
 
  // const onEditText = (e) => {
  //   setTodoInputValue(e.target.value)
  // }

  return (
    <>
      <h2>일기목록</h2>
      {diaryLists.map((list) => 
        <DiaryList2 list={list} setDiaryLists={setDiaryLists} diaryLists={diaryLists} />
      )}
    </>
  )
}

export default DiaryBoard2