import React from "react";
import Layout from "./layout/index";
import { Pitch } from "./components/Pitch/index";

export function App(): JSX.Element | null {
  return (
    <Layout>
      <Pitch />
    </Layout>
  );
}
