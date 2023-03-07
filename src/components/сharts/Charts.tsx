import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { AddNewElement } from "../AddNew/AddNewElement";
import { Chart } from "./Chart";

export const Charts = () => {
  //const data = useAppSelector((state) => state.assets.assetsList);
  //console.log(data);
  const data = useAppSelector((state) => state.charts.chartsList);
  const [show, setShow] = useState<boolean>(false);

  const test = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        {data.map((e) => <Chart data={e} />)}

        <div className="app__charts-button">
          <AddNewElement show={show} handleClick={test} title={'ADD CHARTS'} />
        </div>

      </div>
    </div>
  );
};
