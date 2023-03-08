import { TData } from "./data";

export function findSymbolInArray(array: TData[], symbol: string) {

    let inArray = array.find((elem) => elem.meta.symbol === symbol);
    console.log(array);
    console.log(symbol);
    console.log(inArray);

    if (inArray !== undefined) {
        return true;
    }
    return false;

}