import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import avatar from "../../media/avatar-2.jpg";
import Typewriter from "typewriter-effect";
import "animate.css";

const Team = () => {
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
  const imgResponse = {
    width: "267px",
    height: "45vh",
  };

  return (
    <div style={wrapper}>
      <section style={componentStyles}>
        <Box sx={{ paddingRight: "105px" }} overflow="auto">
          <Box
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100vh",
              margin: "auto",
              padding: "25px 0 0 11.11111vw",
            }}
          >
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("THE TEAM").start();
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={imgResponse}>
                    <img
                      src={avatar}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                      Julia Smagliy
                    </Typography>
                    <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                      Cheif Executive Officer
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={7}>
                            <Box >
                                <Grid sx={{ width: '100%' }}>
                                    <Grid item xs={12} md={6}>
                                        <Box style={imgResponse}>
                                            <img src={avatar} style={{ height: "100%", width: "100%", borderRadius: "8px", overflow: "hidden", }} alt="" />
                                        </Box>
                                        <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                                            <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                                Julia Smagliy
                                            </Typography>
                                            <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                                                Cheif Executive Officer
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Box style={imgResponse}>
                                            <img src={avatar} style={{ height: "100%", width: "100%", borderRadius: "8px", overflow: "hidden" }} alt="" />
                                        </Box>
                                        <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                                            <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                                Julia Smagliy
                                            </Typography>
                                            <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                                                Cheif Executive Officer
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box style={imgResponse}>
                                            <img src={avatar} style={{ height: "100%", width: "100%", borderRadius: "8px", overflow: "hidden" }} alt="" />
                                        </Box>
                                        <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
                                            <Typography variant="h5" sx={{ fontWeight: "700" }}>
                                                Julia Smagliy
                                            </Typography>
                                            <Typography sx={{ color: "hsla(0,0%,100%,.7)" }}>
                                                Cheif Executive Officer
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid> */}
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Team;
