import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import whatImg from "../../media/tablet-about.svg";
import { BsCodeSquare, BsFileCode } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "animate.css";

import "./WhatDo.css";

const WhatDo = () => {
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
  const iconStyle = {
    marginRight: "15px",
    height: "25px",
    width: "25px",
    color: "red",
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
                  typewriter.typeString(" WHAT WE DO").start();
                }}
              />
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "2rem" }}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3.88889vh",
                  }}
                >
                  <BsCodeSquare style={iconStyle} />
                  <Typography sx={{ fontWeight: "light" }}>WEB</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3.88889vh",
                  }}
                >
                  <BsFileCode style={iconStyle} />
                  <Typography sx={{ fontWeight: "light" }}>MOBILE</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography sx={{ fontSize: "14px", color: "slategray" }}>
                  We build functional and secure web applications designed
                  exclusively for your business goals. Core services are based
                  on custom web development using the latest technology
                  solutions and methodologies. With our development teams, we
                  are keen on in-time delivery, provide spread consultations for
                  you to realize the full potential of the solutions we work
                  out.
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid className="left" item xs={12} md={8}>
            <Box
              className="animate__animated animate__slideInRight "
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box className="img2">
                <img style={imgResponse} src={whatImg} alt="" />
              </Box>
            </Box>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default WhatDo;
