// Material UI
import {
  Grid,
  Link,
  Typography,
  AppBar,
  Box,
  useMediaQuery,
} from "@mui/material";
// CSS File
import "./style.css";
// JSON File
import data from "../data/resume.json";
export default function Header() {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <AppBar
      position="relative"
      component="nav"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        left: 0,
        top: 0,
        padding: 5,
        paddingBottom: 7,
        margin: 0,
        width: "100%",
        display: { xs: "none", md: "block" },
      }}
    >
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={6} lg={5}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Link
              href={"/"}
              className="link"
              sx={{
                textDecoration: "none",
                color: "#979dac",
              }}
            >
              <Typography
                component="h3"
                fontSize={isMobile ? 15 : 11}
                fontWeight="bold"
              >
                {data.headerTitle1}
              </Typography>
            </Link>
            <Link
              className="link"
              sx={{ textDecoration: "none", color: "#979dac" }}
            >
              <Typography
                component="h3"
                fontSize={isMobile ? 15 : 11}
                fontWeight="bold"
              >
                {data.headerTitle2}
              </Typography>
            </Link>
            <Link
              href={"/about"}
              className="link"
              sx={{ textDecoration: "none", color: "#979dac" }}
            >
              <Typography
                component="h3"
                fontSize={isMobile ? 15 : 11}
                fontWeight="bold"
              >
                {data.headerTitle3}
              </Typography>
            </Link>

            <Link
              href={"/contact"}
              className="link"
              sx={{ textDecoration: "none", color: "#979dac" }}
            >
              <Typography
                component="h3"
                fontSize={isMobile ? 15 : 11}
                fontWeight="bold"
              >
                {data.headerTitle4}
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
