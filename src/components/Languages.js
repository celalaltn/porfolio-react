// React
import React from "react";
// Material UI
import { Grid, Typography, useMediaQuery } from "@mui/material";
// JSON File
import data from "../data/languages.json";
//CSS File
import "./style.css";

export default function Languages() {
  const isMobile = useMediaQuery("(min-width:900px)");

  const languages = data.map((photos) => (
    <div key={photos.id}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <img
              src={photos.image}
              alt={photos.title}
              style={{ width: "170px", height: "170px" }}
            />
            <br />
            <br />
            <br />
            <Typography
              component="p"
              color="#979dac"
              fontSize={isMobile ? 20 : 20}
              className="link"
              textAlign="center"
            >
              {photos.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ));
  return (
    <>
      <Grid container justifyContent={"space-around"} alignItems={"center"}>
        <Grid item xs={12}>
          <br />

          <Typography
            component="p"
            color="#979dac"
            fontSize={isMobile ? 80 : 25}
            paragraph={true}
            className="link"
          >
            Languages
          </Typography>
          <br />
          <br />
        </Grid>
        {languages}
      </Grid>
    </>
  );
}
