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

export const LOAD_ASSETS_ERROR = "LOAD_ASSETS_ERROR";

export interface ILoadAssetsError {
  type: typeof LOAD_ASSETS_ERROR;
  payload: { message: string };
}

export const DELETE_ASSETS = "DELETE_ASSETS";

export interface IDeleteAssets {
  type: typeof DELETE_ASSETS;
  payload: { symbol: string };
}
export const INIT_ASSETS = "INIT_ASSETS";

export interface IInitAssets {
  type: typeof INIT_ASSETS;
  payload: { symbol: string };
}

export const INIT_ASSETS_SUCCESS = "INIT_ASSETS_SUCCESS";

export interface IInitAssetsSuccess {
  type: typeof INIT_ASSETS_SUCCESS;
  payload: TData[];
}

export type TAssetsAction =
  | ILoadAssets
  | ILoadAssetsSuccess
  | ILoadAssetsError
  | IDeleteAssets
  | IInitAssetsSuccess;
