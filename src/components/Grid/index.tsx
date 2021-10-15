/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useSwappableCells } from "./hooks/useSwappableCells";
import {
  displayCellValue,
  findHighestCol,
  getUniqueKeyFromArrayIndex,
} from "./utils";
import "./style.css";

interface GridProps {
  readonly gridData?: Array<Array<object>>;
  readonly swapCellsEnabled?: boolean;
  readonly displayExpr?: string;
  readonly cellRender?: (cellData: object) => JSX.Element;
}

const Grid = (props: GridProps) => {
  const { displayExpr, gridData, swapCellsEnabled, cellRender } = props;

  //* State */
  const [rowValue] = useState(gridData ? gridData.length : 0);
  const [columnsValue] = useState(gridData ? findHighestCol(gridData) : 0);
  const [tableArrayData, setTableArrayData] = useState<object[][]>(
    gridData || [[]]
  );

  const ref = useRef(null);

  //* Hooks */
  const { getSwappableCellAttributes } = useSwappableCells({
    data: tableArrayData,
    onSwap: (data) => {
      setTableArrayData(data.newData);
    },
  });

  const generateTable = () => {
    const table = [];
    for (let i = 0; i < rowValue; i += 1) {
      const children = [];
      for (let j = 0; j < columnsValue; j += 1) {
        const key = getUniqueKeyFromArrayIndex(i, j);
        children.push(
          <td
            key={key}
            {...(swapCellsEnabled && getSwappableCellAttributes(key))}
          >
            <div id={getUniqueKeyFromArrayIndex(i, j)}>
              {cellRender
                ? cellRender(tableArrayData[i][j])
                : displayCellValue(tableArrayData[i][j], displayExpr)}
            </div>
          </td>
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };

  return (
    <>
      <div>
        <div className='TableContainer'>
          <div>
            <table ref={ref} aria-label='simple table'>
              <tbody>{generateTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

Grid.defaultProps = {
  gridData: [
    ["1", "2"],
    ["3", "4", "6"],
  ],
  swapCellsEnabled: true,
};

export default Grid;
