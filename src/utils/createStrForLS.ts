import { TData } from "./data";

export function createStrForLS(data: TData[]): string {
    let str = '';
    data.forEach((elem, index) => {
        if (index === 0)
            str = elem.meta.symbol;
        if (index !== 0)
            str += ', ' + elem.meta.symbol;
    })
    return str;
}