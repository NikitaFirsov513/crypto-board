export const createMetricsArray = (
  init: number,
  col: number,
  step: number
): number[] => {
  let array: number[] = [];
  console.log({ init, step });

  if (step < 1) {
    for (let i = 10; i >= 0; i--) {
      array.push(Math.floor((init + step * i) * 100) / 100);
    }
    return array;
  }

  for (let i = 10; i >= 0; i--) {
    array.push(Math.floor(init + step * i));
  }

  return array;
};
