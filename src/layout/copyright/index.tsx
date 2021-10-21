import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = (props: any) => (
  <Typography variant='body2' color='text.secondary' align='center' {...props}>
    {"Copyright © "}
    <Link color='inherit' href='http://localhost:8080'>
      Football Squad Picker
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
