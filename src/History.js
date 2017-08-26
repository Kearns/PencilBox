let store = [];
let index = -1;

export function updateStore() {

    let step = new Image();

    step.src = this.canvas.toDataURL();
    store.push(step);
    index += 1;

    if (store.length >= 10) {
        store.shift();
    }
};

export function undo() {
    this.PencilBox.clear();
    this.PencilBox.ctx.drawImage(store[index], 0, 0);
    index -= 1;
};
