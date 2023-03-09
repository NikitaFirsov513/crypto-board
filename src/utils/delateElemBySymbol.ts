import { TData } from "./data";

export function delateElemBySymbol(data: TData[], symbol: string): TData[] {
  data = data.filter((elem) => elem.meta.symbol !== symbol);

  return data;
}
