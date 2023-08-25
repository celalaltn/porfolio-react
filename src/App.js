//Material UI
import { Box, Container, Grid } from "@mui/material";
//Name component
import Name from "./components/Name";
//About component
import About from "./components/About";
//ScrollToTop component
import ScrollToTop from "./components/ScrollToTop";
//Header component
import Header from "./components/Header";
import Languages from "./components/Languages";

function App() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <>
      <Box>
        <div class="progress" />

        <ScrollToTop />
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Header />
            <Grid item xs={12}>
              <Name />
            </Grid>
            <Grid item xs={12}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <Languages />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
