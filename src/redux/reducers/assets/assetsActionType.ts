import { TData } from "../../../utils/data";

export const LOAD_ASSETS = "LOAD_ASSETS";

export interface ILoadAssets {
  type: typeof LOAD_ASSETS;
  payload: string;
}

export const LOAD_ASSETS_SUCCESS = "LOAD_ASSETS_SUCCESS";

export interface ILoadAssetsSuccess {
  type: typeof LOAD_ASSETS_SUCCESS;
  payload: TData;
}

export type TAssetsAction = ILoadAssets | ILoadAssetsSuccess;
