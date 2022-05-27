import { ShortestPathBetweenCell } from './ShortestPathBetweenCell.js';

const runner = (gridList = [''], startX = 0, startY = 0, endX = 0, endY = 0) => {
    if (!gridList.length) {
        return 'Need no empty array';
    }
    const matrix = gridList.map(elem => elem.split(''));
    if (matrix.length > 100 || matrix[0].length > 100) {
        return 'Too big array';
    }
    const getPath = new ShortestPathBetweenCell();
    return getPath.getShortestPath(matrix, startX, startY, endX, endY);
};

const p = document.getElementById('result');
p.textContent = runner(
    [
        '.X.',
        '.X.',
        '...',
    ],
    2, 1,
    0, 2,
);