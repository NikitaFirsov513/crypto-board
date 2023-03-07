import { useEffect, useRef } from "react";
import { findMinMax } from "../../utils/findMinMax";
import { useAppSelector } from "../../redux/store";
import { AssetsElement } from "./AssetsElement";
import { AddNewElement } from "../buttons/addNewElement";

export const Assets = () => {
  const data = useAppSelector((state) => state.assets.assetsList);

  return (
    <div className="app__assets">
      <h1>ASSETS</h1>
      <div className="app__assets-list">
        {data.map((elem) => {
          return <AssetsElement key={elem.meta.symbol} data={elem} />;
        })}
        <div className="app__assets-button">
          <AddNewElement />
        </div>
      </div>
    </div>
  );
};
