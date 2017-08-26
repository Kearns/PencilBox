export function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

export function getClientY(e) {
    return e.touches ? e.touches[0].clientY : e.clientY;
}

export function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();

    return {
        x: getClientX(e) - rect.left,
        y: getClientY(e) - rect.top
    };
}

export function calculateVelocity(eInit, e) {

    if (e === false) {
        return false;
    }

    let xDist = getClientX(e) - eInit.clientX;
    let yDist = getClientY(e) - eInit.clientY;
    let interval = Date.now() - e.time;

    return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
}

export function clearCanvas() {
    this.PencilBox.ctx.clearRect(0, 0, this.offsetWidth, this.offsetHeight);
};
