import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Assets } from './components/assets/Assets';
import { Header } from './components/header/Header';
import { Charts } from './components/сharts/Charts';
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
    <div className="app">
      <div className="app__container">
        <Header />
        <Assets />
        <Charts />

      </div>
    </div>
  )
}

export default App
