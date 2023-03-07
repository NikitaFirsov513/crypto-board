import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { AssetsElement } from "./AssetsElement";
import { AddNewElement } from "../AddNew/AddNewElement";

export const Assets = () => {
  const data = useAppSelector((state) => state.assets.assetsList);
  const [show, setShow] = useState<boolean>(false);

  const test = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="app__assets">
      <h1>ASSETS</h1>
      <div className="app__assets-list">
        {data.map((elem) => {
          return <AssetsElement key={elem.meta.symbol} data={elem} />;
        })}
        <div className="app__assets-button">
          <AddNewElement show={show} handleClick={test} title={"ADD ASSETS"} />
        </div>
      </div>
    </div>
  );
};
