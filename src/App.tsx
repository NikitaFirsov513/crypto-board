import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Assets } from "./components/assets/Assets";
import { Header } from "./components/header/Header";
import { Charts } from "./components/сharts/Charts";
import {
  INIT_ASSETS,
  LOAD_ASSETS,
} from "./redux/reducers/assets/assetsActionType";
import {
  INIT_CHARTS,
  LOAD__CHARTS,
} from "./redux/reducers/charts/chartsActionType";
import { LOAD_TEST } from "./redux/reducers/test/testActionType";
import { useAppSelector } from "./redux/store";
import { getDataFromLS } from "./utils/getDataFromLS";

function App() {
  const dispatch = useDispatch();
  const dataAssets = useAppSelector((state) => state.assets.assetsList);
  const dataCharts = useAppSelector((state) => state.charts.chartsList);

  useEffect(() => {
    //window.localStorage.setItem('assets', '')
    let testAssets = getDataFromLS("assets");
    dispatch({ type: INIT_ASSETS, payload: { symbol: testAssets } });
    let charts = getDataFromLS("charts");
    dispatch({ type: INIT_CHARTS, payload: { symbol: charts } });
    console.log(testAssets);
    console.log(charts);

    /*dispatch({
      type: LOAD_ASSETS,
      payload: "AAPL",
    });

    dispatch({
      type: LOAD__CHARTS,
      payload: "AAPL",
    });*/
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Assets />
        <Charts />
      </div>
    </div>
  );
}

export default App;
