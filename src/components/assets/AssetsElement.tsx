import { useEffect, useRef } from "react";
import { drawCanvas } from "../../utils/drawCanvas";
import { findMinMax } from "../../utils/findMinMax";
import { TAssetsElement } from "./Assets.props";

export const AssetsElement = ({ data, deleteAction }: TAssetsElement) => {
  const refCanvas = useRef<HTMLCanvasElement | null>(null);
  const boundaryValues = useRef(findMinMax(data, 52));

  useEffect(() => {
    if (refCanvas.current === null) return;

    const val = boundaryValues.current;
    const canvas = refCanvas.current;
    drawCanvas({ data, boundaryValues: val, canvas })
  }, []);

  return (
    <div
      onClick={(e) => deleteAction(data.meta.symbol)}
      className="app__assets-element"
    >
      <div className="app__assets-element-top">
        <div className="app__assets-element-info">
          <p className="app__assets-element-info-name">{data.meta.symbol}</p>
          <p className="app__assets-element-info-price">
            {Math.floor(Number(data.values[0].high))}$
          </p>
        </div>
        <canvas ref={refCanvas} width="110" height="55"></canvas>
      </div>
      <div className="app__assets-element-bot">
        <p className="app__assets-element-lable">profit</p>
        <p className="app__assets-element-lable">loss</p>
        <p className="app__assets-element-lable">netral</p>
        <p className="app__assets-element-profit">+ 2,87%</p>
        <p className="app__assets-element-loss">- 0,17%</p>
        <p className="app__assets-element-netral">2,70%</p>
      </div>
    </div>
  );
};
