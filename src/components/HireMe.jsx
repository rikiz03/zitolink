import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function HireMe() {
  return (
    <Box sx={{ "& button": { m: 1 } }} className="pt-4">
      <div>
        <Button
          href="mailto:zitolink19@gmail.com"
          variant="outlined"
          size="small"
        >
          Hire Me
        </Button>
      </div>
    </Box>
  );
}
