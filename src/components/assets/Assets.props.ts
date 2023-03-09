import { TData } from "../../utils/data";

export type TAssetsElement = {
  data: TData;
  deleteAction: (symbol: string) => void;
};
