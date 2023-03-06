export const createMetricsArray = (init: number, col: number, step: number): number[] => {

    let array: number[] = []

    for (let i = 10; i > 0; i--) {
        array.push(Math.floor(init + (step) * i))
    }

    return array;
}