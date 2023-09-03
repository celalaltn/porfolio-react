// React
import React from "react";
// Material UI
import { Grid, Typography, useMediaQuery } from "@mui/material";
// JSON File
import data from "../data/languages.json";

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
              color="white"
              textAlign="center"
              fontSize="20px"
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
            fontSize={isMobile ? 39 : 25}
            paragraph={true}
            textAlign={isMobile ? "center" : "center"}
          >
            Languages
          </Typography>
          <br />
        </Grid>
        {languages}
      </Grid>
    </>
  );
}
