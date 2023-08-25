// React
import React from "react";
// Material UI
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
// CSS File
import "./style.css";
// JSON File
import data from "../data/resume.json";

export default function About() {
  const isMobile = useMediaQuery("(min-width:900px)");

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      {/* Pyramid loader start */}
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <div class="pyramid-loader">
            <div class="wrapper">
              <span class="side side1" />
              <span class="side side2" />
              <span class="side side3" />
              <span class="side side4" />
              <span class="shadow" />
            </div>
          </div>
        </Box>
      </Grid>
      {/* Pyramid loader end */}

      {/* Name and title start */}
      <Grid
        item
        xs={12}
        md={9}
        boxShadow={10}
        borderRadius={10}
        padding={6}
        sx={{ boxShadow: "5px 10px 5px  10px #888888" }}
      >
        <Typography
          component="p"
          color="#979dac"
          fontSize={isMobile ? 25 : 25}
          paragraph={true}
          textAlign={isMobile ? "start" : "center"}
        >
          {data.aboutTitle}
        </Typography>
        <Typography component="p" color="#979dac" fontSize={isMobile ? 20 : 20}>
          {data.aboutStory}
        </Typography>
      </Grid>
      {/* Name and title end */}
    </Grid>
  );
}
