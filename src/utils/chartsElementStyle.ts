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
  const minHeight = 1;

  if (open <= close) {
    let height = (close - open) / px;
    return {
      color: "#3edd87",

      graphElem: {
        height: height < 1 ? minHeight : height,
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

  
  let height = (open - close) / px;

  return {
    color: "#F46565",

    graphElem: {
      height: height < 1 ? minHeight : height,
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
