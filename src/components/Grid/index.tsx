/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSwappableCells } from "./hooks/useSwappableCells";
import {
  displayCellValue,
  findHighestCol,
  getUniqueKeyFromArrayIndex,
} from "./utils";
import "./style.css";

interface StyledGridProps {
  readonly width?: string | number;
  readonly height?: string | number;
}

const StyledGrid = styled.div<StyledGridProps>`
  id: table-wrapper;
  width: ${(props) => `${props.width}px` || "100%"};
  height: ${(props) => `${props.height}px` || "100%"};
`;

interface GridProps {
  readonly displayExpr?: string;
  readonly gridData?: Array<Array<object>>;
  readonly height?: number | string;
  readonly width?: number | string;
  readonly swapCellsEnabled?: boolean;
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

    const cellWidth = props.width
      ? (props.width as number) / columnsValue
      : "auto";
    const cellHeight = props.height
      ? (props.height as number) / rowValue
      : "auto";

    for (let i = 0; i < rowValue; i += 1) {
      const children = [];
      for (let j = 0; j < columnsValue; j += 1) {
        const key = getUniqueKeyFromArrayIndex(i, j);
        children.push(
          <td
            key={key}
            {...(swapCellsEnabled && getSwappableCellAttributes(key))}
            style={{
              width: cellWidth,
              height: cellHeight,
            }}
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
    <StyledGrid {...props}>
      <table ref={ref} aria-label='simple table'>
        <tbody>{generateTable()}</tbody>
      </table>
    </StyledGrid>
  );
};

Grid.defaultProps = {
  gridData: [
    ["1", "2"],
    ["3", "4", "6"],
  ],
  swapCellsEnabled: true,
  height: "100%",
  width: "100%",
};

export default Grid;
