import * as React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Container, Box } from "@mui/material";
import Footer from "./footer/index";
import Header from "./header/index";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Header />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth='md' component='main'>
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
