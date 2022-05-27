import { Cell } from './Cell.js';

export class ShortestPathBetweenCell {
    getShortestPath(matrix, startX, startY, endX, endY) {
        if (matrix[startX][startY] === 'X' || matrix[endX][endY] === 'X') {
            return 'There is no path!';
        }

        const rows = matrix.length;
        const columns = matrix[0].length;
        const cells = [];
        for (let i = 0; i < rows; i++) {
            cells[i] = [];
            for (let j = 0; j < columns; j++) {
                if (matrix[i][j] !== 'X') {
                    cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
                }
            }
        }

        const queue = [];
        const source = cells[startX][startY];
        source.dist = 0;
        queue.push(source);
        let dest = null;
        let parent;
        while ((parent = queue.shift()) !== null) {
            if (parent.x === endX && parent.y === endY) {
                dest = parent;
                break;
            }

            this.walkByCells(cells, queue, parent.x - 1, parent.y, parent);
            this.walkByCells(cells, queue, parent.x, parent.y - 1, parent);
            this.walkByCells(cells, queue, parent.x + 1, parent.y, parent);
            this.walkByCells(cells, queue, parent.x, parent.y + 1, parent);
            this.walkByCells(cells, queue, parent.x - 1, parent.y - 1, parent);
            this.walkByCells(cells, queue, parent.x - 1, parent.y + 1, parent);
            this.walkByCells(cells, queue, parent.x + 1, parent.y - 1, parent);
            this.walkByCells(cells, queue, parent.x + 1, parent.y + 1, parent);
        }

        if (dest === null) {
            return 'There is no path!';
        } else {
            let path = [];
            parent = dest;
            do {
                path.unshift(parent);
            } while ((parent = parent.prev) !== null);
            return `[${path}]`;
        }
    }

    walkByCells(cells, queue, x, y, parent) {
        if (x < 0 || x >= cells.length || y < 0 || y >= cells[0].length || cells[x][y] == null) {
            return undefined;
        }
        const dist = parent.dist + 1;
        const path = cells[x][y];
        if (dist < path.dist) {
            path.dist = dist;
            path.prev = parent;
            queue.push(path);
        }
    }
}