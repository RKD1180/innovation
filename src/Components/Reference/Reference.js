import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BsStarFill } from "react-icons/bs";
import clutch from "../../media/clutch.svg";
import avatar from "../../media/imageMan1";
import Typewriter from "typewriter-effect";
import "animate.css";

const Reference = () => {
  const wrapper = {
    width: "100%",
    height: "100vh",
  };
  const componentStyles = {
    color: "#fff",
    width: "100%",
    height: "100vh",
    // padding: "25px 0 0 11.11111vw",
    overflow: "hidden",
  };
  const wrapperTwo = {
    width: "100%",
    height: "100%",
    position: "relative",
    margin: "0",
  };

  return (
    <div style={wrapper}>
      <section style={componentStyles}>
        <Box style={wrapperTwo}>
          <Box sx={{ paddingRight: "105px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxHeight: "100vh",
                padding: "25px 0 0 11.11111vw",
                height: "100vh",
              }}
            >
              <Grid item xs={12} md={4}>
                <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(" REFERENCE").start();
                    }}
                  />
                </Typography>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Box>
                    <Typography sx={{ fontSize: ".7rem" }}>
                      REVIEWED ON
                    </Typography>
                    <img src={clutch} alt="" />
                  </Box>
                  <Box sx={{ marginLeft: "1rem" }}>
                    <Typography sx={{ color: "red" }}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </Typography>
                    <Typography sx={{ fontSize: ".9rem" }}>
                      3 REVIEWS
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7} sx={{ padding: "0 20px" }}>
                <Box sx={{ overflowY: "auto" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "340px",
                        height: "72px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={avatar}
                        alt=""
                      />
                    </Box>
                    <Box sx={{ marginTop: "1.59722vw" }}>
                      <Typography variant="h5" sx={{ fontWeight: "700" }}>
                        Roman Gaoufman
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          color: "hsla(0,0%,100%,.7)",
                          padding: ".2rem",
                        }}
                      >
                        <em>Xanview / Chief Executive Officer</em>
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "1.25vw",
                          color: "hsla(0,0%,100%,.7)",
                          lineHeight: "2.15278vw",
                          fontSize: "1.25vw",
                        }}
                      >
                        I'm working with Innovation Feel for more than 2 years
                        now. We feel like the extended team in Ukraine it's been
                        absolutely phenomenal. We speak to each other daily,
                        they help us build an amazing product. Yuriy has made
                        the process smooth and we wouldn't be in today without
                        his team. Thank you Innovation Feel.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", height: "240px" }}>
                    <Box
                      sx={{
                        width: "180px",
                        height: "72px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={avatar}
                        alt=""
                      />
                    </Box>
                    <Box sx={{ marginTop: "1.59722vw" }}>
                      <Typography variant="h5" sx={{ fontWeight: "700" }}>
                        Roman Gaoufman
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          color: "hsla(0,0%,100%,.7)",
                          padding: ".2rem",
                        }}
                      >
                        <em>Xanview / Chief Executive Officer</em>
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "1.25vw",
                          color: "hsla(0,0%,100%,.7)",
                          lineHeight: "2.15278vw",
                          fontSize: "1.25vw",
                        }}
                      >
                        Innovation Feel successfully developed the prototype.
                        The communication and responsiveness were good. They
                        were always available to meet and discuss.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", height: "240px" }}>
                    <Box
                      sx={{
                        width: "110px",
                        height: "72px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        style={{ height: "100%", width: "100%" }}
                        src={avatar}
                        alt=""
                      />
                    </Box>
                    <Box sx={{ marginTop: "1.59722vw" }}>
                      <Typography variant="h5" sx={{ fontWeight: "700" }}>
                        Roman Gaoufman
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          color: "hsla(0,0%,100%,.7)",
                          padding: ".2rem",
                        }}
                      >
                        <em>Xanview / Chief Executive Officer</em>
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "1.25vw",
                          color: "hsla(0,0%,100%,.7)",
                          lineHeight: "2.15278vw",
                          fontSize: "1.25vw",
                        }}
                      >
                        Their communication, technical capability, and
                        understanding of customer needs were all amazing.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Reference;
