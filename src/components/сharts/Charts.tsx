import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DELETE_CHARTS,
  LOAD__CHARTS,
  LOAD__CHARTS_ERROR,
} from "../../redux/reducers/charts/chartsActionType";
import { useAppSelector } from "../../redux/store";
import { deleteFromLS } from "../../utils/deleteFromLS";
import { findSymbolInArray } from "../../utils/findSymbolInArray";
import { AddNewElement } from "../addNew/AddNewElement";
import { Chart } from "./Chart";

export const Charts = () => {
  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.charts.chartsList);
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const deleteElem = (symbol: string) => {
    dispatch({
      type: DELETE_CHARTS,
      payload: {
        symbol: symbol,
      },
    });
    deleteFromLS("charts", symbol);
  };

  const chooseElement = (symbol: string) => {
    let symbolInArray = findSymbolInArray(data, symbol);

    if (symbolInArray) {
      dispatch({
        type: LOAD__CHARTS_ERROR,
        payload: {
          message: "Charts " + symbol + " уже добавлен",
        },
      });

      return;
    }

    dispatch({
      type: LOAD__CHARTS,
      payload: symbol,
    });
    toggleShow();
  };

  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        {data.map((e) => (
          <Chart deleteAction={deleteElem} key={e.meta.symbol} data={e} />
        ))}
        <div className="app__charts-button">
          <AddNewElement
            chooseElement={chooseElement}
            show={show}
            handleClick={toggleShow}
            title={"ADD CHARTS"}
          />
        </div>
      </div>
    </div>
  );
};
