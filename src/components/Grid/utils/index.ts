// 2d table utils
const getUniqueKeyFromArrayIndex = (rowNum: number, columnNum: number) =>
  `${rowNum}-${columnNum}`;

const findHighestCol = (table: any[][]) =>
  table.map((cols) => cols.length).sort()[table.length - 1];

export {
    getUniqueKeyFromArrayIndex,
    findHighestCol
}