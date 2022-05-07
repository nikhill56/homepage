import React ,{ useRef, useState } from "react";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Typography, Card, CardContent } from "@mui/material";
import * as roadmap from "./HomePage.module.css";
import curve from "./curve.png";
import timeline from "./timelinebg.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import telegram from "./telegram.svg";
import medium from "./medium.svg";
// /* Inline #4 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// .page-body-wrapper {
//   /* min-height: calc(100vh - 70px); */
//   /* width: calc(100% - 244px); */
// }

// .content-wrapper {
//   /* background: #000000; */
// }

// /* Inline #80 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// @media (min-width: 600px) {
//   .css-k3kfax-MuiContainer-root {
//     /* padding-left: 24px; */
//     /* padding-right: 24px; */
//   }
// }

// /* Inline #79 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// .css-k3kfax-MuiContainer-root {
//   /* margin-top: 200px; */
// }

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Roadmap from "./Roadmap";
import TextField from "@mui/material/TextField";
import bottom from "./image1276.png";
import desktop from "./Group 33941.png";
import vector1 from "./Other 07.png";
import vector2 from "./Saly-44.png";
import vector3 from "./Saly-26.png";
import vector4 from "./Image.png";
import vector5 from "./Saly-10.png";
import boxes from "./Group 160.png";
import mobile from "./Vectary texture.png";

//post

  
  //
const ButtonBootstrap = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 18,
  background:
    "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
  color: "white",
  padding: "8px 40px",
  border: "0px",
  borderRadius: "10px",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    opacity: 1,
    backgroundColor: "#5a2cbb",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
  "&:active": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
}));

const HomePage = () => {
  const baseURL = "http://localhost:8800";
  const post_email = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      email: post_email.current.value,
    };
    try {
      const res = await fetch(`${baseURL}/subscribe`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  return (
    <div
      style={{
        margin: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100% !important",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              background: `url(${curve})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              height: "40rem",
              transform: "translate(0,-40px)",
              margin: "0 auto",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90vw !important",
                position: "fixed",
                position: "-webkit-sticky",
                top: "0",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  marginLeft: "0px",
                }}
              >
                <img
                  src={require("../RarikoLogoFinal.png")}
                  height="60"
                  width="60"
                />
                <h2
                  style={{
                    margin: "0px",
                    fontSize: "54px",
                    marginLeft: "16px",
                    fontWeight: "800",
                  }}
                >
                  <span style={{ color: "white", margin: "0px" }}>Rari</span>
                  <span style={{ color: "red", margin: "0px" }}>ko</span>
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "0.2",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                >
                  About
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                >
                  Service
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                >
                  Roadmap
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                >
                  <ButtonBootstrap>Login/Register</ButtonBootstrap>
                </span>
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100vw",
                justifyContent: "space-between",
                margin: "80px 0px",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "800px",
                    height: "209px",
                    left: "120px",
                    top: "236px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "64px",
                    lineHeight: "70px",

                    /* or 109% */
                    letterSpacing: "0.03em",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "400",
                      color: "white",
                      fontSize: "64px",
                      margin: "0px",
                    }}
                  >
                    A new way to socialize in the world of
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#f969cd",
                        fontSize: "60px",
                        marginTop: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      WEB 3.0
                    </span>
                  </h1>
                  <ButtonBootstrap style={{}}>Coming Soon</ButtonBootstrap>
                </div>
                <img src={boxes} alt="image" height="360" width="500" />
              </div>
            </Box>
          </Box>
        </Box>

        <Box
          className="white-box"
          style={{ backgroundColor: "white", width: "100vw" }}
        >
          <Box>
            <Stack>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  margin: "0px",
                  fontSize: "40px",
                  marginLeft: "16px",
                  marginTop: "50px",
                  fontWeight: "800",
                  // textDecoration: "underline",
                  paddingBottom: "60px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    paddingBottom: "8px",
                    paddingLeft: "50px",
                    fontsize: "45px",
                    fontWeight: "700",
                    width: "200px",
                    textAlign: "right",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  Rari
                </span>
                <span
                  style={{
                    color: "red",
                    margin: "0px",
                    paddingBottom: "8px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  ko
                </span>
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    padding: "8px",
                    paddingRight: "50px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  Dashboard
                </span>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} my={"auto"}>
                  <Stack justifyContent="center">
                    <p
                      color="black"
                      justifyContent="center"
                      style={{
                        marginLeft: "100px",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "50px",

                        /* or 179% */
                        display: "flex",
                        alignItems: "center",

                        /* Gray */
                        color: "#585757",
                      }}
                    >
                      Rariko is a social media platform in the world of Web3.0
                      that allows users to socialize with fellow blockchaain
                      sapiens, create and monetize censorship resistant content.
                    </p>
                    <p
                      style={{
                        marginLeft: "100px",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "50px",

                        /* or 179% */
                        display: "flex",
                        alignItems: "center",

                        /* Gray */
                        color: "#585757",
                      }}
                    >
                      Also, we are simplifying the community management for projects to engage and manage their audience in few clicks.
                    </p>
                    <ButtonBootstrap
                      style={{
                        height: "50px",
                        width: "95px",
                        marginLeft: "300px",
                      }}
                    >
                      Explore
                    </ButtonBootstrap>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ width: "100%", position: "relative" }}>
                    <img
                      src={desktop}
                      alt="desktop"
                      style={{ width: "80%" }}
                    ></img>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ margin: "0 auto", width: "100%", paddingBottom: "40px" }}
          >
            <Grid item xs={6} md={12}>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  margin: "0px",
                  fontSize: "40px",
                  marginLeft: "16px",
                  fontWeight: "800",
                  textAlign: "center",
                  paddingBottom: "20px",
                  paddingTop: "30px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    fontsize: "45px",
                    paddingBottom: "8px",
                    paddingLeft: "50px",
                    fontWeight: "700",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  Rari
                </span>
                <span
                  style={{
                    color: "red",
                    margin: "0px",
                    paddingBottom: "8px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  ko
                </span>
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    padding: "8px",
                    paddingRight: "50px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "3px solid rgba(100,100,100,0.4)",
                  }}
                >
                  Services
                </span>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{
                padding: "20px",
                marginLeft: "100px",
              }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  background: "#5F4AE0",
                  height: "20rem",
                  borderRadius: "16px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={vector1}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Dashboard
                </h1>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{ padding: "20px", marginLeft: "100px" }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  background: "#689CD8",
                  height: "15rem",
                  borderRadius: "16px",
                  height: "20rem",
                  borderRadius: "16px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={vector2} alt="" />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Connect
                </h1>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{ padding: "20px", marginLeft: "100px" }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  background: "#D868A4",
                  height: "15rem",
                  borderRadius: "16px",
                  height: "20rem",
                  borderRadius: "16px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={vector3} alt="" />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Governance
                </h1>
              </div>
            </Grid>
            <Container
              sx={{
                width: "1400px !important",
                display: "flex",
                justifyContent: "space-between",
                margin: "0px auto",
              }}
            >
              <Container
                // xs={12}
                // md={12}
                // lg={5}
                sx={{ padding: "20px", width: "100%", height: "20rem" }}
              >
                <div
                  className="services-box"
                  style={{
                    border: "1px solid white",
                    background: "#282828",
                    height: "18rem",
                    borderRadius: "16px",
                    height: "20rem",
                    borderRadius: "16px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={vector4} alt="" />
                  <h1
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Content Ownership
                  </h1>
                </div>
              </Container>
              <Container
                xs={12}
                md={12}
                lg={5}
                sx={{ padding: "20px", width: "100%", height: "20rem" }}
              >
                <div
                  className="services-box"
                  style={{
                    border: "1px solid white",
                    background: "#282828",
                    height: "18rem",
                    borderRadius: "16px",
                    height: "20rem",
                    borderRadius: "16px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={vector5} alt="" />
                  <h1
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Community Manager
                  </h1>
                </div>
              </Container>
            </Container>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ width: "100vw", backgroundColor: "white" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Box>
      <Container
        sx={{
          position: "relative",
          padding: "0px",
          transform: "translate(0,-10rem)",
          background: `url(${timeline})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          width: "100vw",
          height: "100rem",
          backgroundColor: "black",
        }}
      >
        {/* <Container
          sx={{
            maxWidth: "100% !important",
            padding: "0px !important",
            backgroundColor: "#040130",
            borderTopLeftRadius: "10%",
            borderTopRightRadius: "-30%",
            padding: "0px",
            background:`url(${timeline})`,backgroundRepeat:'no-repeat',backgroundPosition:'bottom',backgroundSize:'cover'
          }}
        > */}
        <h2
          style={{ margin: "0px", textAlign: "center", marginBottom: "20px" }}
        >
          Roadmap
        </h2>
        {/* <Typography textAlign="center" sx={{ marginBottom: "50px" }}>
            A quarter-wise dream to reality roadmap
          </Typography> */}
        {/* <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div style={{paddingVertical: "50px"}}>
                  <h1
                    style={{
                      fontWeight: "1000",
                      fontSize: "4rem",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "#FF40A5",
                    }}
                    className="quarters"
                  >
                    Q1
                  </h1>
                  <h1
                      style={{
                        fontWeight: "1000",
                        fontSize: "4rem",
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "white",
                      }}
                      className="quarters"                  
                  >2022</h1>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "5px solid purple",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                
                  <Card
                    sx={{
                      border: "3px solid #6614E5",
                      borderRadius: "10px",
                      backgroundColor: "black",
                    }}
                  >
                    <div
                      style={{ backgroundColor: "#6614E5", overflow: "hidden" }}
                    >
                      <div
                        style={{
                          backgroundColor: "A474E5",
                          overflow: "hidden",
                          borderTopRightRadius: "30px",
                        }}
                      >
                        <CardContent
                          sx={{
                            borderTopRightRadius: "100px",
                            backgroundColor: "black",
                          }}
                        >
                          <Typography
                            variant="h6"
                            textAlign="left"
                            style={{ marginLeft: "40px", color: "white" }}
                          >
                            Idea
                          </Typography>
                          <Typography
                            variant="h6"
                            textAlign="left"
                            style={{ marginLeft: "40px", color: "white" }}
                          >
                            Pre Seed
                          </Typography>
                          <Typography
                            variant="h6"
                            textAlign="left"
                            style={{ marginLeft: "40px", color: "white" }}
                          >
                            Development
                          </Typography>
                          <Typography
                            variant="h6"
                            textAlign="left"
                            style={{ marginLeft: "40px", color: "white" }}
                          >
                            Testing
                          </Typography>
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, #A474E5 0%, #AB7BE9 15.1%, #4E1CB8 68.64%, #672ACC 81.77%, #754AAD 100%);",
                              width: "100px",
                              position: "absolute",
                              zIndex: 99,
                              float: "right",
                            }}
                          ></div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div style={{paddingVertical: "50px"}}>
                  <h1
                    style={{
                      fontWeight: "1000",
                      fontSize: "4rem",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "#FF40A5",
                    }}
                    className="quarters"
                  >
                    Q2
                  </h1>
                  <h1
                      style={{
                        fontWeight: "1000",
                        fontSize: "4rem",
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "white",
                      }}
                      className="quarters"                  
                  >2022</h1>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "5px solid purple",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    border: "3px solid #6614E5",
                    borderRadius: "10px",
                    backgroundColor: "black",
                  }}
                >
                  <div
                    style={{ backgroundColor: "#6614E5", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        backgroundColor: "A474E5",
                        overflow: "hidden",
                        borderTopRightRadius: "30px",
                      }}
                    >
                      <CardContent
                        sx={{
                          borderTopRightRadius: "100px",
                          backgroundColor: "black",
                        }}
                      >
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Product Launch
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                         Token Deployment
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Voting Protocol
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Staking
                        </Typography>
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #A474E5 0%, #AB7BE9 15.1%, #4E1CB8 68.64%, #672ACC 81.77%, #754AAD 100%);",
                            width: "100px",
                            position: "absolute",
                            zIndex: 99,
                            float: "right",
                          }}
                        ></div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div style={{paddingVertical: "50px"}}>
                  <h1
                    style={{
                      fontWeight: "1000",
                      fontSize: "4rem",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "#FF40A5",
                    }}
                    className="quarters"
                  >
                    Q3
                  </h1>
                  <h1
                      style={{
                        fontWeight: "1000",
                        fontSize: "4rem",
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "white",
                      }}
                      className="quarters"                  
                  >2022</h1>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "5px solid purple",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    border: "3px solid #6614E5",
                    borderRadius: "10px",
                    backgroundColor: "black",
                  }}
                >
                  <div
                    style={{ backgroundColor: "#6614E5", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        backgroundColor: "A474E5",
                        overflow: "hidden",
                        borderTopRightRadius: "30px",
                      }}
                    >
                      <CardContent
                        sx={{
                          borderTopRightRadius: "100px",
                          backgroundColor: "black",
                        }}
                      >
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Post-Update
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          NFT Marketplace
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Content Monetization
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          Smart Contract Audits
                        </Typography>
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #A474E5 0%, #AB7BE9 15.1%, #4E1CB8 68.64%, #672ACC 81.77%, #754AAD 100%);",
                            width: "100px",
                            position: "absolute",
                            zIndex: 99,
                            float: "right",
                          }}
                        ></div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div style={{paddingVertical: "50px"}}>
                  <h1
                    style={{
                      fontWeight: "1000",
                      fontSize: "4rem",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "#FF40A5",
                    }}
                    className="quarters"
                  >
                    Q4
                  </h1>
                  <h1
                      style={{
                        fontWeight: "1000",
                        fontSize: "4rem",
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "white",
                      }}
                      className="quarters"                  
                  >2022</h1>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "5px solid purple",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></div>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    border: "3px solid #6614E5",
                    borderRadius: "10px",
                    backgroundColor: "black",
                  }}
                >
                  <div
                    style={{ backgroundColor: "#6614E5", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        backgroundColor: "A474E5",
                        overflow: "hidden",
                        borderTopRightRadius: "30px",
                      }}
                    >
                      <CardContent
                        sx={{
                          borderTopRightRadius: "100px",
                          backgroundColor: "black",
                        }}
                      >
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                         NFT Lending
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                         DAO Stack Launch
                        </Typography>
                        <Typography
                          variant="h6"
                          textAlign="left"
                          style={{ marginLeft: "40px", color: "white" }}
                        >
                          On-Chain Governance
                        </Typography>
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #A474E5 0%, #AB7BE9 15.1%, #4E1CB8 68.64%, #672ACC 81.77%, #754AAD 100%);",
                            width: "100px",
                            position: "absolute",
                            zIndex: 99,
                            float: "right",
                          }}
                        ></div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline> */}
        {/* </Container> */}
      </Container>
      <Box
        className="white-box"
        style={{ backgroundColor: "white", width: "100vw", height: "100px" }}
      >
        <Box>
          <Stack>
            <Typography
              variant="h2"
              textAlign="center"
              style={{
                margin: "0px",
                fontSize: "45px",
                marginLeft: "50px",
                fontWeight: "800",
                paddingTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#7240FF",
                  textDecoration: "underline",
                  margin: "0px",
                  padding: "8px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Download
              </span>
              <span
                style={{
                  color: "black",
                  margin: "0px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Rari
              </span>
              <span
                style={{
                  color: "red",
                  margin: "0px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                ko
              </span>
              <span
                style={{
                  color: "black",
                  margin: "0px",
                  padding: "8px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Whitepapers
              </span>
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Container
        sx={{
          maxWidth: "100% !important",
          padding: "50px !important",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={6} md={8}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                marginTop:"2.5rem"
              }}
            >
              <img
                src={require("../RarikoLogoFinal.png")}
                height="80"
                width="80"
              />
              <h2
                style={{
                  margin: "0px",
                  fontSize: "70px",
                  marginLeft: "16px",
                  fontWeight: "800",
                }}
              >
                <span style={{ color: "white", margin: "0px" }}>Rari</span>
                <span style={{ color: "red", margin: "0px" }}>ko</span>
              </h2>
            </div>
          </Grid>
          {/* <Grid item xs={6} md={8}>
            <h6 style={{ marginLeft: "35px" }}>Find us at:</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={medium} alt="" />
              <img src={insta} alt="" />
              <img src={telegram} alt="" />
            </div>
          </Grid> */}
        </Grid>
        <div
          style={{
            height: "300px",
            width: "6px",
            backgroundColor: "#9100FF",
            margin: "0px 10px",
          }}
        ></div>
        <Grid container style={{ display: "flex", justifyContent: "center",marginTop:"2.5rem" }}>
          <Grid item xs={6} md={8}>
            <h6 style={{ marginLeft: "65px" }}>Find us at:</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={medium} alt="" />
              <img src={insta} alt="" />
              <img src={telegram} alt="" />
            </div>
          </Grid>
          {/* <Grid item xs={6} md={8}>
            <h3 style={{ color: "white", fontSize: "25px" }}>Contact Us:</h3>
          </Grid>
          <Grid item xs={6} md={9}>
            <span style={{ color: "white", fontSize: "14px" }}>
              Email: contact@rariko.com
            </span>
          </Grid>
          <Grid item xs={6} md={9}>
            <span style={{ color: "white", fontSize: "15px" }}>
              Mobile: +91-8446610100
            </span>
          </Grid>
          <Grid item xs={6} md={9}>
            <span style={{ color: "white", fontSize: "15px" }}>
              Mobile: 71237123712
            </span>
          </Grid> */}
        </Grid>
        {/* <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={6} md={8}>
            <h3 style={{ color: "white" }}>Rariko Pages</h3>
          </Grid>
          <Grid item xs={6} md={8}>
            <span style={{ color: "white" }}>Dashboard</span>
          </Grid>
          <Grid item xs={6} md={8}>
            <span style={{ color: "white" }}>Rariko Token</span>
          </Grid>
          <Grid item xs={6} md={8}>
            <span style={{ color: "white" }}>Support</span>
          </Grid>
        </Grid> */}
        <div
          style={{
            height: "300px",
            width: "5px",
            backgroundColor: "#9100FF",
            margin: "0px 10px",
          }}
        ></div>
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={6} md={8}>
            <h2
              style={{
                margin: "0px",
                fontSize: "20px",
                marginLeft: "90px",
                fontWeight: "800",
              }}
            >
              <span style={{ color: "white", margin: "0px" }}>Rari</span>
              <span style={{ color: "red", margin: "0px" }}>ko</span>
              <span style={{ color: "white", margin: "0px", padding: "8px" }}>
                Newsletter
              </span>
            </h2>
          </Grid>
          <Grid item xs={6} md={8}>
            <FormControl sx={{ width: "30ch", marginBottom: "30px",marginLeft:"45px" }}>
              <OutlinedInput
                placeholder="Email"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(100,100,100,0.3)",
                  borderRadius: "15px",
                }}
                ref={post_email}
              />
            </FormControl>
            {/* <FormControl sx={{ width: "30ch", marginTop: "20px" }}>
              <TextareaAutosize
                minRows={4}
                placeholder="Message"
                style={{
                  color: "white",
                  backgroundColor: "rgba(100,100,100,0.3)",
                  height: "8rem",
                  borderRadius: "15px",
                  border: "none",
                  padding: "10px",
                }}
              />
            </FormControl> */}
            {/* <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              sx={{ backgroundColor: "#433f4d", color: "white" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Message"
              sx={{ backgroundColor: "#433f4d", color: "white" }}
            /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "auto",
                padding: "10px",
                marginLeft: "80px",
              }}
            >
              <ButtonBootstrap onClick={postData}>Subscribe</ButtonBootstrap>
              <button onClick={postData}>Subscribe</button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div style={{ fontSize: "10px" }}>Ⓒ All rights reserved 2022</div>
    </div>
  );
};

export default HomePage;
