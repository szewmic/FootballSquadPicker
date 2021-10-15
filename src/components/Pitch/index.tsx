import React from "react";
import Grid from "../Grid/index";
import "./style.css";

const squadTable = [
  [
    {},
    {
      name: "John",
      age: 10,
    },
    {},
    {
      name: "Pete",
      age: 100,
    },
    {},
  ],
  [
    {
      name: "George",
      age: 1,
    },
    {},
    {},
    {},
    {
      name: "Hoke",
      age: 32,
    },
  ],
  [
    {},
    {
      name: "Mark",
      age: 4,
    },
    {},
    {
      name: "Pan",
      age: 90,
    },
    {},
  ],
  [
    {},
    {},
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
    {
      name: "Hoke",
      age: 32,
    },
    {},
    {
      name: "Piotr",
      age: 8,
    },
    {
      name: "Tyho",
      age: 99,
    },
  ],
];

const playerCellRender = (data: any) => {
  if (data?.name) {
    return (
      <div>
        <div style={{ color: "white", textAlign: "center" }}>
          {data?.name || ""}
        </div>

        <img width={60} height={60} src='/anonim.png' alt='test' />
      </div>
    );
  }
  return <div />;
};

playerCellRender({});
export const Pitch = () => (
  <div id='pitch'>
    <div id='pitch-grid'>
      <Grid
        cellRender={playerCellRender}
        gridData={squadTable}
        displayExpr='name'
        height={600}
        width={500}
        swapCellsEnabled
      />
    </div>
  </div>
);
