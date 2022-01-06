import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import mobileDB from "../../media/mobile-dashboard.svg";
import tabletDB from "../../media/tablet-dashboard.svg";
import Typewriter from "typewriter-effect";
import "animate.css";

import "./Bringldeas.css";

const BringIdeas = () => {
  const wrapper = {
    width: "100%",
    height: "100%",
  };
  const componentStyles = {
    color: "#fff",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };
  const imgResponse = {
    width: "70%",
    height: "100%",
    right: 0,
  };

  return (
    <div className="box" style={wrapper}>
      <section style={componentStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "25px 0 0 11.11111vw",
            position: "relative",
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("BRING YOUR IDEAS TO LIFE").start();
                }}
              />
            </Typography>
          </Grid>
          <Grid className="left" item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                className="animate__animated animate__slideInLeft "
                sx={{
                  left: "89px",
                  position: "relative",
                }}
              >
                <img
                  className="img1"
                  style={imgResponse}
                  src={mobileDB}
                  alt=""
                />
              </Box>
              <Box
                className="animate__animated animate__slideInRight"
                sx={{ position: "relative", right: "50px" }}
              >
                <img
                  className="img2"
                  style={imgResponse}
                  src={tabletDB}
                  alt=""
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default BringIdeas;
