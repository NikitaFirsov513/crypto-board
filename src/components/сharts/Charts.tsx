import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOAD__CHARTS, LOAD__CHARTS_ERROR } from "../../redux/reducers/charts/chartsActionType";
import { useAppSelector } from "../../redux/store";
import { findSymbolInArray } from "../../utils/findSymbolInArray";
import { AddNewElement } from "../AddNew/AddNewElement";
import { Chart } from "./Chart";

export const Charts = () => {

  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.charts.chartsList);
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  const chooseElement = (symbol: string) => {
    let symbolInArray = findSymbolInArray(data, symbol);

    if (symbolInArray) {
      dispatch({
        type: LOAD__CHARTS_ERROR,
        payload: {
          message: "Charts " + symbol + " уже добавлен",
        }
      });
      return;
    }

    dispatch({
      type: LOAD__CHARTS,
      payload: symbol,
    });
    toggleShow()
  };


  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        {data.map((e) => <Chart key={e.meta.symbol} data={e} />)}
        <div className="app__charts-button">
          <AddNewElement chooseElement={chooseElement} show={show} handleClick={toggleShow} title={'ADD CHARTS'} />
        </div>
      </div>
    </div>
  );
};
