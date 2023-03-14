import TextInput from "../../../features/TextInput/TextInput";
// import Button from "../../../features/Button/Button"
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Carousel from "../Carousel/Carousel";

function HomePage() {
  const THEMENDATA = [
    {
      iamge: "/1.jpg",
      text1: "Betriebslage und Störungen.",
      text2:
        "Hier informieren wir Sie rund um die Uhr über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz. ",
    },
    {
      image: "/2.jpg",
      text1: "Ausverkauf Artikel Jubiläumskollektion.",
      text2:
        "Profitieren Sie von 40% Rabatt auf die Kollektion 175 Jahre Schweizer Bahnen.",
    },
    {
      image: "/3.jpg",
      text1: "Werden Sie Teil der SBB Kundenstimme.",
      text2:
        "Ihre Meinung ist gefragt! Machen Sie jetzt mit bei der SBB Kundenstimme und entwickeln, gestalten und verbessern Sie mit uns Produkte, Services und Prozesse.",
    },
    {
      image: "/4.jpg",
      text1: "Kofferschleppen adieu.",
      text2:
        "Ob mit dem Zug oder dem Flugzeug in die Ferien: Dank unseren Gepäckservices können Sie Koffer von Bahnhof zu Bahnhof oder sogar von Tür zu Tür transportieren lassen.",
    },
  ];
  return (
    <>
      <Container>
        <Grid
          textAlign="center"
          container
          maxWidth={"xl"}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "4em",
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextInput label={"Von"} width={"350px"} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextInput label={"Nach"} width={"350px"} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Button
              style={{
                height: "55px",
                margin: "8px",
                backgroundColor: "red",
                border: "none",
                width: "350px",
                textTransform: "capitalize",
              }}
            >
              <Typography color={"white"}>Verbindung suchen</Typography>
              <ArrowRightAltOutlinedIcon
                style={{ color: "white", marginLeft: "10px" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Grid
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
      >
        <span
          style={{
            zIndex: "4",
            width: "0",
            height: "0",
            borderTop: "159px solid transparent",
            borderLeft: "300px solid red",
            borderBottom: "159px solid transparent",
            position: "absolute",
            top: "150px",
            opacity: "0.8",
          }}
        ></span>
        <span
          style={{
            color: "white",
            zIndex: "5",
            width: "0",
            height: "0",
            borderTop: "100px solid transparent",
            borderLeft: "200px solid white",
            borderBottom: "100px solid transparent",
            left: "100px",
            position: "absolute",
            top: "300px",
            opacity: "0.8",
          }}
        >
          <Typography
            variant={"h5"}
            style={{
              position: "absolute",
              left: "-170px",
              top: "-40px",
              zIndex: "23224",
              color: "Black",
              fontWeight: "600",
            }}
          >
            Bis Zu
          </Typography>
          <Typography
            color={"red"}
            fontWeight={"700"}
            variant={"h4"}
            style={{
              position: "absolute",
              left: "-170px",
      
              zIndex: "23224",
            }}
          >
            -20%
          </Typography>
        </span>
      </Grid>

      <Carousel
        next={(next, active) =>
          console.log(`we left ${active}, and are now at ${next}`)
        }
        prev={(prev, active) =>
          console.log(`we left ${active}, and are now at ${prev}`)
        }
      ></Carousel>

      <Typography
        variant="h4"
        align="center"
        color={"gray"}
        mt="30px"
        mb={"30px"}
      >
        Aktuelle Themen
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div style={{ backgroundColor: "#f6f6f6", height: "470px" }}>
              <img
                src={"/1.jpg"}
                width="100%"
                style={{ marginBottom: "30px" }}
              />
              <div style={{ padding: "10px" }}>
                <Typography variant="h5" style={{ marginBottom: "30px" }}>
                  {THEMENDATA[0].text1}
                </Typography>
                <Typography variant="h7">{THEMENDATA[0].text2}</Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div style={{ backgroundColor: "#f6f6f6", height: "470px" }}>
              <img
                src={"/2.jpg"}
                width="100%"
                style={{ marginBottom: "30px" }}
              />
              <div style={{ padding: "10px" }}>
                <Typography variant="h5" style={{ marginBottom: "30px" }}>
                  {THEMENDATA[1].text1}
                </Typography>
                <Typography variant="h7">{THEMENDATA[1].text2}</Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div style={{ backgroundColor: "#f6f6f6", height: "470px" }}>
              <img
                src={"/3.jpg"}
                width="100%"
                style={{ marginBottom: "30px" }}
              />
              <div style={{ padding: "10px" }}>
                <Typography variant="h5" style={{ marginBottom: "30px" }}>
                  {THEMENDATA[2].text1}
                </Typography>
                <Typography>{THEMENDATA[2].text2}</Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div style={{ backgroundColor: "#f6f6f6", height: "470px" }}>
              <img
                src={"/4.jpg"}
                width="100%"
                style={{ marginBottom: "30px" }}
              />
              <div style={{ padding: "10px" }}>
                <Typography variant="h5" style={{ marginBottom: "30px" }}>
                  {THEMENDATA[3].text1}
                </Typography>
                <Typography variant="h7">{THEMENDATA[3].text2}</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
