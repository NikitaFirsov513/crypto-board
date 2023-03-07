import { useRef } from "react";
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

  const elem = useRef<HTMLDivElement>(null)

  const styles = chartsElementStyle({
    index,
    datetime,
    open,
    high,
    low,
    close,
    boundaryValues,
  });



  const show = () => {
    elem.current?.classList.toggle("app__charts-candlestick-elem-info--active");
  };
  return (
    <div className="app__charts-candlestick-elem">
      <div onMouseOver={() => show()} onMouseOut={() => show()}
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
            marginTop: styles.graphElem.height,
            height: styles.botSpan.height,
            background: styles.color,
          }}
        ></span>
        <div ref={elem} className="app__charts-candlestick-elem-info">
          <p>open:{open}</p>
          <p>high:{high}</p>
          <p>low:{low}</p>
          <p>close:{close}</p>

        </div>
      </div>
      <p>{datetime.split('-')[1]}.{datetime.split('-')[2]}</p>
    </div >
  );
};/* <div className="app__charts-candlestick-elem">
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



 console.group()
  console.log({ open })
  console.log({ high })
  console.log({ low })
  console.log({ close })
  console.log({ datetime })
  console.log({ styles })
  console.groupEnd()*/
