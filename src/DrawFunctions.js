import * as utils from './Utils';

export function onDrawEnd(e, callback) {

    e.preventDefault();
    this.ctx.closePath();
    this.settings.mousePosition = [{}, {}, {}];
    this.settings.isMouseActive = false;

    if (callback) {
        callback();
    }
};

export function onDrawStart(e, callback) {

    e.preventDefault();
    this.updateStore();
    this.settings.isMouseActive = true;
    this.ctx.beginPath();
    this.ctx.moveTo(this.settings.mousePosition[0].x, this.settings.mousePosition[0].y);

    if (callback) {
        callback();
    }
};

export function onDraw(e, callback) {
    e.preventDefault();

    if (!this.settings.isMouseActive) {
        return;
    }

    e.time = Date.now();
    this.settings.velocity = utils.calculateVelocity(e, this.settings.previousEvent);
    this.settings.mousePosition.shift();
    this.settings.mousePosition.push(utils.getMousePos(e.target, e));
    this.settings.previousEvent = e;

    this.brush();

    if (callback) {
        callback();
    }
};
