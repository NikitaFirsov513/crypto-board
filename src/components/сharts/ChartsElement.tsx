import { chartsElementStyle } from "../../utils/chartsElementStyle";
import { TChartsElement } from "./Charts.props";

export const ChartsElement = ({
  index,
  datetime,
  open,
  high,
  low,
  close,
  boundaryValues,
}: TChartsElement) => {
  const styles = chartsElementStyle({
    index,
    datetime,
    open,
    high,
    low,
    close,
    boundaryValues,
  });

  return (
    <div className="app__charts-candlestick-elem">
      <div
        style={{
          height: styles.graphElem.height,
          marginBottom: styles.graphElem.marginBottom,
          backgroundColor: styles.color,
        }}
        className="app__charts-candlestick-elem-body"
      >
        <span
          style={{
            marginTop: -styles.topSpan.height,
            height: styles.topSpan.height,
            background: styles.color,
          }}
        ></span>
        <span
          style={{
            marginTop: -styles.botSpan.height,
            height: styles.botSpan.height,
            background: styles.color,
          }}
        ></span>
      </div>
      <p>10:00</p>
    </div>
  );
};
