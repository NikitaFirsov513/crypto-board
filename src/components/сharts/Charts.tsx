import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../../redux/store";

export const Charts = () => {
  const data = useAppSelector((state) => state.assets.assetsList);
  //console.log(data);
  const test = () => {
    document
      .getElementById("test")
      ?.classList.toggle("app__charts-candlestick-elem-info--active");
  };

  return (
    <div className="app__charts">
      <h1>Candlestick Chart</h1>
      <div className="app__charts-list">
        <div className="app__charts-element">
          <h2>Bitcoin</h2>
          <div className="app__charts-container">
            <div className="app__charts-metric">
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
              <p>100</p>
            </div>
            <div className="app__charts-candlestick">
              <div className="app__charts-candlestick-elem">
                <div
                  style={{ marginBottom: 50, background: "#3edd87" }}
                  className="app__charts-candlestick-elem-body"
                >
                  <span
                    style={{ marginTop: 41, height: 20, background: "#3EDD87" }}
                  ></span>
                  <span
                    style={{
                      marginTop: -15,
                      height: 15,
                      background: "#3EDD87",
                    }}
                  ></span>
                </div>
                <p>10:00</p>
              </div>
              <div className="app__charts-candlestick-elem">
                <div
                  onMouseEnter={(e) => test()}
                  onMouseLeave={(e) => test()}
                  style={{ marginBottom: 40, background: "#F46565" }}
                  className="app__charts-candlestick-elem-body"
                >
                  <span
                    style={{ marginTop: 41, height: 20, background: "#F46565" }}
                  ></span>
                  <span
                    style={{
                      marginTop: -15,
                      height: 15,
                      background: "#F46565",
                    }}
                  ></span>
                  <div id="test" className="app__charts-candlestick-elem-info ">
                    <p>top:100</p>
                    <p>open:100</p>
                    <p>close:100</p>
                    <p>low:100</p>
                  </div>
                </div>
                <p>10:10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
