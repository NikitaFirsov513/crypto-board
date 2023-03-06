export type TChartsElement = {
  index: number;
  datetime: string;
  open: number;
  high: number;
  low: number;
  close: number;
  boundaryValues: {
    min: number;
    max: number;
    diff: number;
    px: number;
  };
};
