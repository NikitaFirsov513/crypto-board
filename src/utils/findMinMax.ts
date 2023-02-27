import { TData } from "./data";

export const findMinMax = (data: TData) => {

    let min = Number(data.values[0].low);
    let max = Number(data.values[0].high);

    for (let i = 0; i < data.values.length; i++) {
        let low = Number(data.values[i].low);
        if (low < min)
            min = low;

        let high = Number(data.values[i].high);
        if (high > max)
            max = high;
    }

    const diff = max - min
    const px = diff / 52;
    //const px = 250 / diff;
    //alert(diff + '-' + px)
    return { min, max, diff, px }

}