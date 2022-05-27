export class Cell {
    constructor(x, y, dist, prev) {
        this.x = x;
        this.y = y;
        this.dist = dist;
        this.prev = prev;
    }

    toString() {
        return `{x: ${this.x}, y: ${this.y}}`;
    }
}