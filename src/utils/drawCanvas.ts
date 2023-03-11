import { TData } from "./data";

type TDrawCanvas = {
    data: TData,
    boundaryValues: {
        min: number;
        max: number;
        diff: number;
        px: number;
    },
    canvas: HTMLCanvasElement
}

export function drawCanvas({ data, boundaryValues, canvas }: TDrawCanvas) {

    const context = canvas.getContext("2d");
    context?.clearRect(0, 0, canvas.width, canvas.height);
    const px = boundaryValues.px;
    const min = boundaryValues.min;

    if (context === null) return;

    context.lineWidth = 2;
    context.strokeStyle = "rgb(255,255,255)";
    context.lineCap = "round";

    for (let i = 0; i < data.values.length; i++) {
        const high = Number(data.values[i].high);

        if (i == 0) {
            context.moveTo(0, (high - min) / px);
        } else {
            context.lineTo(i * (110 / data.values.length), (high - min) / px);
            const x = i * (110 / data.values.length);
            const y = (high - min) / px;
        }
    }
    context.stroke();
}