import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import techImage from "../../media/tablet-technologies.svg";
import { BsCodeSquare, BsFileCode } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import Typewriter from "typewriter-effect";
import "animate.css";

const Technology = () => {
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
    width: "80%",
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
                  typewriter.typeString("TECHNOLOGIES").start();
                }}
              />
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "2rem" }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BsCodeSquare style={iconStyle} />
                  <Typography sx={{ fontWeight: "light" }}>
                    FRONT-END
                  </Typography>
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3.88889vh",
                  }}
                >
                  <CgDatabase style={iconStyle} />
                  <Typography sx={{ fontWeight: "light" }}>BACK-END</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography sx={{ fontSize: "14px", color: "slategray" }}>
                  Front-end development is at the crossroads of three core
                  principles, such as clean code, beautiful design, and
                  intuitive usage. We guarantee all three of them. Experience in
                  creating, developing, and debugging JavaScript applications
                  using modern environments such as Angular, React.
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid
            className="animate__animated animate__slideInRight"
            item
            xs={12}
            md={8}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box className="left">
                <img
                  className="img2"
                  style={imgResponse}
                  src={techImage}
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

export default Technology;

/* import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BsCodeSquare, BsFileCode } from 'react-icons/bs';
import { CgDatabase } from 'react-icons/cg';
import techImage from '../../media/tablet-technologies.svg'

const Technology = () => {

    const wrapper = {
        width: '100%',
        height: '100vh'
    }
    const componentStyles = {
        color: "#fff",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
    }
    const imgResponse = {
        width: "80%",
        height: "100%",
        right: 0
    }
    const iconStyle = {
        marginRight: "15px",
        height: "25px",
        width: "25px",
        color: 'red'
    }

    return (
        <div style={wrapper}>
            <section style={componentStyles}>
                <Grid sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", maxHeight: '100vh', margin: 'auto', padding: "25px 0 0 11.11111vw", }}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontSize: '4rem', fontWeight: 'bold', paddingBottom: '80px' }}>
                            TECHNOLOGIES
                        </Typography>
                        <Grid sx={{ display: 'flex' }}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <BsCodeSquare style={iconStyle} />
                                    <Typography sx={{ fontWeight: 'light' }}>
                                        FRONT-END
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '3.88889vh' }}>
                                    <BsFileCode style={iconStyle} />
                                    <Typography sx={{ fontWeight: 'light' }}>
                                        MOBILE
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '3.88889vh' }}>
                                    <CgDatabase style={iconStyle} />
                                    <Typography sx={{ fontWeight: 'light' }}>
                                        BACK-END
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography sx={{ fontSize: '14px', color: "slategray" }}>
                                    Front-end development is at the crossroads of three core principles, such as clean code, beautiful design, and intuitive usage. We guarantee all three of them. Experience in creating, developing, and debugging JavaScript applications using modern environments such as Angular, React.
                                </Typography>
                            </Grid>
                        </Grid >
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box style={wrapper}>
                            <img style={imgResponse} src={techImage} alt="" />
                        </Box>
                    </Grid>
                </Grid >
            </section>
        </div>
    );
};

export default Technology; */
