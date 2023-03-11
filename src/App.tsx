import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Assets } from "./components/assets/Assets";
import { Header } from "./components/header/Header";
import { Charts } from "./components/сharts/Charts";
import { INIT_ASSETS } from "./redux/reducers/assets/assetsActionType";
import { INIT_CHARTS } from "./redux/reducers/charts/chartsActionType";
import { getDataFromLS } from "./utils/getDataFromLS";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let testAssets = getDataFromLS("assets");
    dispatch({ type: INIT_ASSETS, payload: { symbol: testAssets } });
    let charts = getDataFromLS("charts");
    dispatch({ type: INIT_CHARTS, payload: { symbol: charts } });
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
