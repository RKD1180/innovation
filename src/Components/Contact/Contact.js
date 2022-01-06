import React from "react";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Typewriter from "typewriter-effect";
import "animate.css";

import "./Contact.css";

const Contact = () => {
  const wrapper = {
    width: "100%",
    height: "100vh",
  };
  const componentStyles = {
    color: "#fff",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };
  const iconStyle = {
    marginRight: "15px",

    color: "red",
    fontSize: "19px",
  };

  return (
    <div style={wrapper}>
      <section style={componentStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "100vh",
            margin: "auto",
            padding: "25px 0 0 11.11111vw",
          }}
          style={wrapper}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("CONTACT").start();
                }}
              />
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "3.88889vh",
              }}
            >
              <AiOutlineMail style={iconStyle} />
              <Typography
                className="textContent"
                sx={{
                  fontSize: "16px",
                  fontWeight: "light",
                }}
              >
                letsgo@innovationfeel.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                marginTop: "3.88889vh",
              }}
            >
              <FiPhone style={iconStyle} />
              <Box className="textContent">
                <Typography sx={{ fontSize: "16px" }}>
                  +1 (475) 655 44 47 (USA)
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  +38 (097) 713 91 83 (UA)
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                marginTop: "3.88889vh",
              }}
            >
              <GoLocation style={iconStyle} />
              <Typography className="textContent" sx={{ fontSize: "16px" }}>
                Shevchenka Blvd, 150, #96b
                <br /> Cherkasy, 18000 Ukraine
              </Typography>
            </Box>
          </Grid>
          <Grid style={{ color: "white" }} item xs={12} md={8}>
            <form>
              <TextField
                label="Name"
                helperText="This field is required!"
                variant="standard"
                required={true}
                style={{ color: "white" }}
                sx={{ width: "60%" }}
              />
              <TextField
                label="Email"
                helperText="This field is required!"
                variant="standard"
                required={true}
                sx={{ width: "60%", marginTop: "3.88889vh" }}
              />
              <TextField
                className="textField"
                label="Phone Number"
                variant="standard"
                required={true}
                sx={{ width: "60%", marginTop: "3.88889vh" }}
              />
              <TextField
                label="Description"
                helperText="This field is required!"
                variant="standard"
                required={true}
                sx={{ width: "60%", marginTop: "3.88889vh" }}
              />
              <Box sx={{ marginTop: "3.88889vh", display: "flex" }}>
                <Button variant="outlined" style={{ color: "white" }}>
                  Send
                </Button>
                <Box sx={{ marginLeft: "3.88889vh" }}>
                  <Typography>
                    <Checkbox style={{ color: "white" }} />
                    I'm not a robot
                  </Typography>
                </Box>
              </Box>
            </form>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default Contact;
