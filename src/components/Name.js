// React
import React from "react";
// Material UI
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
//CSS File
import "./style.css";
//JSON File
import data from "../data/resume.json";

export default function Name() {
  const isMobile = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} marginBottom={isMobile ? 0 : 2}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={isMobile ? 500 : 200}
            className="typingt"
            boxShadow={20}
            borderRadius={10}
            sx={{ boxShadow: "5px 10px 5px  10px #888888" }}
          >
            <Grid item>
              <Typography
                className="  typing-effect link"
                component="h1"
                fontSize={isMobile ? 80 : 40}
                textAlign={"center"}
              >
                {data.name}
              </Typography>
              <Typography
                className="tracking-in-expand link"
                component="h2"
                fontSize={isMobile ? 25 : 20}
                textAlign={"center"}
              >
                {data.title}
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display={"flex"}
            justifyContent={isMobile ? "end" : "center"}
            alignItems={"end"}
            padding={3}
          >
            <img src="../assests/person.png" alt="" width="80%" height="100%" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
