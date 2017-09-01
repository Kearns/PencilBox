
export function selectBrush(brushName) {
    this.settings.brush = this.availableBrushes[brushName];
};

export function setBrushSize(brushSize) {
    this.settings.lineWidth = brushSize;
};

export function pen() {

    let x, y;
    let mousePosition = this.settings.mousePosition;
    let lineWidth = this.settings.lineWidth;
    let velocity = this.settings.velocity;
    let ctx = this.ctx;

    ctx.lineWidth = lineWidth + (velocity * .5);

    ctx.beginPath();

    x = (mousePosition[0].x + mousePosition[1].x) / 2;
    y = (mousePosition[0].y + mousePosition[1].y) / 2;

    ctx.moveTo(x, y);

    x = (mousePosition[1].x + mousePosition[2].x) / 2;
    y = (mousePosition[1].y + mousePosition[2].y) / 2;

    ctx.quadraticCurveTo(mousePosition[1].x, mousePosition[1].y, x, y);
    ctx.stroke();
};

export function pencil() {

    let lineWidth = this.settings.lineWidth;
    let mousePosition = this.settings.mousePosition;
    let ctx = this.ctx;

    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(mousePosition[1].x, mousePosition[1].y);
    ctx.lineTo(mousePosition[2].x, mousePosition[2].y);
    ctx.stroke();
};
