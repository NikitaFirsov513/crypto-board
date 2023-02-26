import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LOAD_TEST } from './redux/reducers/test/testActionType';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_TEST,
      payload: {
        data: LOAD_TEST
      }
    })

  }, [])
  return (
    <div className="App">
      <h1>First</h1>
    </div>
  )
}

export default App
