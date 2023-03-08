import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { AssetsElement } from "./AssetsElement";
import { AddNewElement } from "../AddNew/AddNewElement";
import { useDispatch } from "react-redux";
import { LOAD_ASSETS, LOAD_ASSETS_ERROR } from "../../redux/reducers/assets/assetsActionType";
import { findSymbolInArray } from "../../utils/findSymbolInArray";

export const Assets = () => {

  const dispatch = useDispatch();
  const data = useAppSelector((state) => state.assets.assetsList);
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const chooseElement = (symbol: string) => {
    let symbolInArray = findSymbolInArray(data, symbol);

    if (symbolInArray) {
      dispatch({
        type: LOAD_ASSETS_ERROR,
        payload: {
          message: "Asset " + symbol + " уже добавлен",
        }
      });
      toggleShow()
      return;
    } else {
      dispatch({
        type: LOAD_ASSETS,
        payload: symbol,
      });
      toggleShow()
    }
  };

  return (
    <div className="app__assets">
      <h1>ASSETS</h1>
      <div className="app__assets-list">
        {data.map((elem) => {
          return <AssetsElement key={elem.meta.symbol} data={elem} />;
        })}
        <div className="app__assets-button">
          <AddNewElement chooseElement={chooseElement} show={show} handleClick={toggleShow} title={"ADD ASSETS"} />
        </div>
      </div>
    </div>
  );
};
