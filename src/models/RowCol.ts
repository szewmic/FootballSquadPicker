export class RowCol {
  private row: number;

  private col: number;

  constructor(cellId: string) {
    const [row, col] = cellId.split("-");
    this.row = parseInt(row, 10);
    this.col = parseInt(col, 10);
  }

  get Row() {
      return this.row;
  }

  get Col() {
      return this.col;
  }
}
