import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../../redux/store";
import { createMetricsArray } from "../../utils/createMetricsArray";
import { data } from "../../utils/data";
import { dataTwo } from "../../utils/dataTwo";
import { findMinMax } from "../../utils/findMinMax";
import { AddNewElement } from "../buttons/addNewElement";
import { ChartsElement } from "./ChartsElement";

export const Charts = () => {
  //const data = useAppSelector((state) => state.assets.assetsList);
  //console.log(data);
  const data = useAppSelector((state) => state.charts.chartsList[0]);
  const boundaryValues = useRef(findMinMax(data, 280));
  console.log(boundaryValues);
  const test = () => {
    document
      .getElementById("test")
      ?.classList.toggle("app__charts-candlestick-elem-info--active");
  };
  const metricsArray = createMetricsArray(boundaryValues.current.min, 10, boundaryValues.current.diff / 10)

  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        <div className="app__charts-element">
          <h2>{data.meta.symbol}</h2>
          <div className="app__charts-container">
            <div className="app__charts-metric">

              {metricsArray.map((elem) => <p key={elem}>{elem}</p>)}
            </div>
            <div className="app__charts-candlestick">
              {data.values.map((elem, i) => {
                return (
                  <ChartsElement
                    index={i}
                    key={elem.datetime}
                    datetime={elem.datetime}
                    open={Number(elem.open)}
                    high={Number(elem.high)}
                    low={Number(elem.low)}
                    close={Number(elem.close)}
                    boundaryValues={boundaryValues.current}
                  />
                );
              })}

            </div>
          </div>
        </div>

        <div className="app__charts-button">
          <AddNewElement />
        </div>

      </div>
    </div>
  );
};
