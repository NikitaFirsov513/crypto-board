import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Assets } from "./components/assets/Assets";
import { Header } from "./components/header/Header";
import { Charts } from "./components/сharts/Charts";
import { LOAD_ASSETS } from "./redux/reducers/assets/assetsActionType";
import { LOAD_TEST } from "./redux/reducers/test/testActionType";
import { useAppSelector } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const dataAssets = useAppSelector((state) => state.assets.assetsList);

  useEffect(() => {
    dispatch({
      type: LOAD_ASSETS,
      payload: {
        data: LOAD_ASSETS,
      },
    });
  }, []);
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        {dataAssets.length > 0 ? <Assets /> : <></>}
        <Charts />
      </div>
    </div>
  );
}

export default App;
