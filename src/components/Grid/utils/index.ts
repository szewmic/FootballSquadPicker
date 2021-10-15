// 2d table utils
const getUniqueKeyFromArrayIndex = (rowNum: number, columnNum: number) =>
  `${rowNum}-${columnNum}`;

const findHighestCol = (table: any[][]) =>
  table.map((cols) => cols.length).sort()[table.length - 1];

const displayCellValue = (data?: any, expr?: string) => {
  if (!data) {
    return "";
  }

  if (expr && data[expr]) {
    return data[expr];
  }

  if (typeof data !== "string" || typeof data !== "number") {
    throw Error("Invalid cell value");
  }

  return data;
};

export { displayCellValue, getUniqueKeyFromArrayIndex, findHighestCol };
