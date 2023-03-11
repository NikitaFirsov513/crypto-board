import { useRef } from "react";
import { createMetricsArray } from "../../utils/createMetricsArray";
import { TData } from "../../utils/data";
import { findMinMax } from "../../utils/findMinMax";
import { ChartsElement } from "./ChartsElement";

type TChartProps = {
  data: TData;
  deleteAction: (symbol: string) => void;
};

export const Chart = ({ data, deleteAction }: TChartProps) => {
  const boundaryValues = useRef(findMinMax(data, 289));
  const metricsArray = createMetricsArray(
    boundaryValues.current.min,
    10,
    boundaryValues.current.diff / 10
  );

  return (
    <div className="app__charts-element">
      <h2>{data.meta.symbol}</h2>
      <div
        onClick={(e) => deleteAction(data.meta.symbol)}
        className="app__charts-container"
      >
        <div className="app__charts-metric">
          {metricsArray.map((elem, i) => (
            <p key={elem + "" + i}>{elem}</p>
          ))}
        </div>
        <div className="app__charts-candlestick">
          {data.values.map((elem, i) => {
            return (
              <ChartsElement
                index={i}
                key={elem.datetime + elem.volume}
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
  );
};
