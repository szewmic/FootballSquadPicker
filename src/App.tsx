import React from "react";
import Grid from "./components/Grid/index";

const squadTable = [
  [
    {
      name: "John",
      age: 10,
    },
    {
      name: "Pete",
      age: 100,
    },
    {
      name: "Mark",
      age: 4,
    },
  ],
  [
    {
      name: "George",
      age: 1,
    },
    {
      name: "Luki",
      age: 99,
    },
  ],
  [
    {
      name: "Hoke",
      age: 32,
    },
  ],
];

export function App(): JSX.Element | null {
  return (
    <div>
      <Grid gridData={squadTable} displayExpr='name' swapCellsEnabled />
    </div>
  );
}
