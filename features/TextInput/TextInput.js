import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ label, width }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        style={{
          width: `${width}`,
        //  border:"2px solid lightgray",
        //  borderRadius:"5px"
        }}
      />
    </Box>
  );
}
