import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import data from "../data/languages.json";
export default function Languages() {
  const sonuclar = data.map((veri) => (
    <div key={veri.id}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <img src={veri.image} alt={veri.title} />
            <Typography component="p" color="white" textAlign="center">
              {veri.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ));
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        {sonuclar}
      </Grid>
    </>
  );
}
