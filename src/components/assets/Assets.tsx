import { useEffect, useRef } from "react";
import { findMinMax } from "../../utils/findMinMax";
import { useAppSelector } from "../../redux/store";
import { AssetsElement } from "./AssetsElement";
export const Assets = () => {
  const data = useAppSelector((state) => state.assets.assetsList);

  return (
    <div className="app__assets">
      <h1>ASSETS</h1>
      <div className="app__assets-list">
        {data.map((elem) => {
          return <AssetsElement data={elem} />;
        })}
      </div>
    </div>
  );
};
