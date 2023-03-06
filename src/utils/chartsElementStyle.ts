import { TChartsElement } from "../components/сharts/Charts.props";

export const chartsElementStyle = ({
  datetime,
  open,
  high,
  low,
  close,
  boundaryValues,
}: TChartsElement) => {
  const px = boundaryValues.px;
  const min = boundaryValues.min;

  if (open <= close) {
    return {
      color: "#3edd87",

      graphElem: {
        height: (close - open) / px,
        marginBottom: (open - min) / px,
      },
      topSpan: {
        height: (high - close) / px,
      },
      botSpan: {
        height: (open - low) / px,
        marginTop: (close - open) / px,
      },
    };
  }
  return {
    color: "#F46565",

    graphElem: {
      height: (open - close) / px,
      marginBottom: (close - min) / px,
    },
    topSpan: {
      height: (high - open) / px,
    },
    botSpan: {
      height: (close - low) / px,
      marginTop: (open - close) / px,
    },
  };
};
