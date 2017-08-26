import * as utils from './Utils';
import settings from './Settings';
import {undo, updateStore} from './History';
import {onDraw, onDrawStart, onDrawEnd} from './DrawFunctions';
import {selectBrush, setBrushSize, pen, pencil} from './Brushes';

export default class PencilBox {
	constructor(canvas) {
		this.brush = pen;
		this.availableBrushes = {pen, pencil};
		this.clear = utils.clearCanvas.bind(this);
		this.undo = undo;
		this.updateStore = updateStore;
		this.canvas = canvas;
		this.settings = settings;
		this.selectBrush = selectBrush;
		this.setBrushSize = setBrushSize;
		this.onDrawStart = onDrawStart;
		this.onDraw = onDraw;
		this.onDrawEnd = onDrawEnd;
		this.ctx = canvas.getContext('2d');
		this.ctx.fillStyle = 'black';
		this.ctx.strokeStyle = 'black';
		this.ctx.lineCap = 'round';

		/* Enable default event handlers */
		['mousedown', 'touchstart'].forEach(
			val => this.canvas.addEventListener(val, e => this.onDrawStart(e), false)
		);

		['mousemove', 'touchmove'].forEach(
			val => this.canvas.addEventListener(val, e => this.onDraw(e), false)
		);

		['mouseup', 'mouseleave', 'touchend'].forEach(
			val => this.canvas.addEventListener(val, e => this.onDrawEnd(e), false)
		);
	};
};
