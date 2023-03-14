import React, { useState } from "react";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const App = () => {
  const [randNum, setRandNum] = useState(0);

  const [max, setMax] = useState(10);
  const [min, setMin] = useState(0);

  const minInt = parseInt(min);

  // console.log(typeof minInt);
  //genarate random number
  const genarateRandom = () => {
    setRandNum(Math.floor(Math.random() * (max - minInt)) + minInt);
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" gutterBottom component="div">
            {randNum}
          </Typography>
          <hr />
          <TextField
            value={max}
            onChange={(e) => setMax(e.target.value)}
            style={{ margin: "2px" }}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Max"
          />
          <TextField
            value={min}
            onChange={(e) => setMin(e.target.value)}
            style={{ margin: "2px" }}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Min"
          />
          <br />
          <Button onClick={genarateRandom} variant="contained" disableElevation>
            GENERATE NUMBER
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
