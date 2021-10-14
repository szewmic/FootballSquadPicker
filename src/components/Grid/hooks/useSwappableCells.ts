/* eslint-disable no-unused-vars */
import { RowCol } from "../../../models/RowCol";

const SWAP_CELL_SRC_KEY = "swapCellKey";

interface SwappedData {
  oldData: Array<Array<string | number | Date>>;
  newData: Array<Array<string | number | Date>>;
}

interface SwappableCellsConfig {
  readonly data: Array<Array<string | number | Date>>;
  readonly onSwap?: (data: SwappedData) => void;
}

export const useSwappableCells = (config: SwappableCellsConfig) => {
  const { data, onSwap } = config;

  const onDragStart = (event: any, id: string) => {
    const dt = event.dataTransfer;
    dt.setData(SWAP_CELL_SRC_KEY, id);
  };

  const onDragEnd = (event: any, id: string) => {
    event.preventDefault();
    if (event.type === "drop") {
      const srcCellId = event.dataTransfer.getData(SWAP_CELL_SRC_KEY);
      const srcCellRowCol = new RowCol(srcCellId);
      const destCellRowCol = new RowCol(id);

      const newData: Array<Array<string | number | Date>> = [...data];
      const src = data[srcCellRowCol.Row][srcCellRowCol.Col];
      const dest = data[destCellRowCol.Row][destCellRowCol.Col];

      newData[destCellRowCol.Row][destCellRowCol.Col] = src;
      newData[srcCellRowCol.Row][srcCellRowCol.Col] = dest;
      if (onSwap) {
        onSwap({ oldData: data, newData });
      }
    }
  };

  const getSwappableCellAttributes = (id: string) => ({
        draggable: true,
        onDragStart: (e: any) => (
            onDragStart(e, id)
        ),
        onDragEnd: (e: any) => (
            onDragEnd(e, id)
        ),
        onDragOver: (e: any) => (
            onDragEnd(e, id)
        ),
        onDrop: (e: any) => (
            onDragEnd(e, id)
        )
      });

  return {
    getSwappableCellAttributes,
    onDragStart,
    onDragEnd,
  };
};
