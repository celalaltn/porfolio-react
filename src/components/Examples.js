// React
import React from "react";
// Material UI
import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
// JSON File
import examples from "../data/examples.json";
//CSS File
import "./style.css";
export default function Examples() {
  const isMobile = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Grid item xs={4} width={"100%"}>
        <Typography
          component="p"
          color="#979dac"
          fontSize={isMobile ? 80 : 50}
          paragraph={true}
          className="link"
        >
          Projects
        </Typography>
      </Grid>

      <br />
      <br />
      <Grid container spacing={5}>
        {examples.map((projects) => (
          <Grid item xs={12} lg={12} key={projects.id}>
            <Grid
              container
              spacing={{ xs: 0, lg: 3 }}
              boxShadow={10}
              borderRadius={10}
              sx={{ boxShadow: "2px 5px 2px  5px #888888" }}
              padding={1}
            >
              <Grid item xs={12} lg={5}>
                <img
                  src={projects.projectImg}
                  alt={projects.projectName}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={7} padding={2}>
                <Link
                  href={projects.projectURL}
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    component="h1"
                    color="#979dac"
                    fontSize={isMobile ? 28 : 16}
                    textAlign="center"
                  >
                    {projects.projectName}&nbsp;
                    <OpenInNewOutlinedIcon
                      sx={{ fontSize: "18px", color: "#42a5f5" }}
                    />
                  </Typography>
                </Link>

                <br />
                <Typography
                  component="h1"
                  color="#979dac"
                  fontSize={isMobile ? 26 : 18}
                  className="link"
                >
                  Techs :
                </Typography>

                <br />
                <Grid container justifyContent={"space-between"}>
                  {projects.projectTechs.map((index) => (
                    <Grid item xs={4} lg={3} key={index.id}>
                      <Typography
                        component="p"
                        color="#979dac"
                        fontSize={isMobile ? 17 : 15}
                        textAlign="center"
                        className="link"
                      >
                        ◉&nbsp;{index.techName}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <br />
                <Typography
                  component="h1"
                  color="#979dac"
                  fontSize={isMobile ? 26 : 18}
                  className="link"
                >
                  Responsibilities:
                </Typography>

                <br />
                {projects.responsibility.map((li) => (
                  <Grid item xs={12} key={li.id}>
                    <Typography
                      component="p"
                      color="#979dac"
                      fontSize={isMobile ? 17 : 15}
                      className="link"
                    >
                      ➤ &nbsp; &nbsp; &nbsp; {li.techName}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <br />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
