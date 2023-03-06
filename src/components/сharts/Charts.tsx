import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../../redux/store";
import { data } from "../../utils/data";
import { findMinMax } from "../../utils/findMinMax";
import { ChartsElement } from "./ChartsElement";

export const Charts = () => {
  //const data = useAppSelector((state) => state.assets.assetsList);
  //console.log(data);
  const boundaryValues = useRef(findMinMax(data, 280));
  console.log(boundaryValues);
  const test = () => {
    document
      .getElementById("test")
      ?.classList.toggle("app__charts-candlestick-elem-info--active");
  };

  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        <div className="app__charts-element">
          <h2>Bitcoin</h2>
          <div className="app__charts-container">
            <div className="app__charts-metric">
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
            </div>
            <div className="app__charts-candlestick">
              {data.values.map((elem, i) => {
                return (
                  <ChartsElement
                    index={i}
                    key={elem.datetime}
                    datetime={i + "---" + elem.datetime}
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
      </div>
    </div>
  );
};
