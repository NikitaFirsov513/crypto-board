import { useRef, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { createMetricsArray } from "../../utils/createMetricsArray";
import { findMinMax } from "../../utils/findMinMax";
import { AddNewElement } from "../AddNew/AddNewElement";
import { ChartsElement } from "./ChartsElement";

export const Charts = () => {
  //const data = useAppSelector((state) => state.assets.assetsList);
  //console.log(data);
  const data = useAppSelector((state) => state.charts.chartsList[0]);
  const boundaryValues = useRef(findMinMax(data, 280));
  const [show, setShow] = useState<boolean>(false);

  console.log(boundaryValues);
  const test = () => {
    setShow((prev) => !prev);
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
          <AddNewElement show={show} handleClick={test} title={'ADD CHARTS'} />
        </div>

      </div>
    </div>
  );
};
