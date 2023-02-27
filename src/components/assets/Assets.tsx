import { useEffect, useRef } from "react";
import { data } from "../../utils/data";
import { findMinMax } from "../../utils/findMinMax";

export const Assets = () => {

    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    const boundaryValues = useRef(findMinMax(data))

    useEffect(() => {

        if (refCanvas.current === null)
            return

        const canvas = refCanvas.current;
        const context = canvas.getContext("2d");
        context?.clearRect(0, 0, canvas.width, canvas.height);
        const px = boundaryValues.current.px;
        const min = boundaryValues.current.min;

        if (context === null)
            return

        context.lineWidth = 2;
        context.strokeStyle = "rgb(255,255,255)";
        context.lineCap = "round";
        context.moveTo(0, 52);

        
        let coordList: number[] = []
        for (let i = 0; i < data.values.length; i++) {
            const high = Number(data.values[i].high);

            //console.log(i * (110 / data.values.length), (high - min) / px)
            context.lineTo(i * (110 / data.values.length), (high - min) / px);
            const x = i * (110 / data.values.length);
            const y = (high - min) / px;
            //context.quadraticCurveTo()
            

        }
        context.stroke();

    }, [])
    return (
        <div className="app__assets">
            <h1>ASSETS</h1>
            <div className="app__assets-list">
                <div className="app__assets-element">
                    <div className="app__assets-element-top">
                        <div className="app__assets-element-info">
                            <p className="app__assets-element-info-name">Bitcoin</p>
                            <p className="app__assets-element-info-price">1,820</p>
                        </div>
                        <canvas ref={refCanvas} width="110" height="55"></canvas>
                    </div>
                    <div className="app__assets-element-bot">
                        <p className="app__assets-element-lable">profit</p>
                        <p className="app__assets-element-lable">loss</p>
                        <p className="app__assets-element-lable">netral</p>
                        <p className="app__assets-element-profit">
                            + 2,87%
                        </p>
                        <p className="app__assets-element-loss">
                            - 0,17%
                        </p>
                        <p className="app__assets-element-netral">
                            2,70%
                        </p>
                    </div>
                </div>
            </div>
        </div>)

}