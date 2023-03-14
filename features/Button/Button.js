import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function BasicButtons({ label }) {
  return (
    <Button size="small" variant="contained" color="error">
      <Typography>{label}</Typography>
    </Button>
  );
}
