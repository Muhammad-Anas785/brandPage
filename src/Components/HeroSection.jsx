import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import FlipCart from "/Images/flipkart.png";
import Amazon from "/Images/amazon.png";
import Shoe from "/Images/shoe_image.png";

import React from "react";

const HeroSection = () => {
  return (
    <>
      <Box padding="20px 80px">
        <Grid container>
          <Grid item xs={12} md={6} paddingLeft={5}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "900",
                fontFamily: "Poppins",
                fontSize: { xs: "50px", md: "80px" },
                textAlign: { xs: "center", md: "left" },
              }}
              gutterBottom
            >
              YOUR FEET DESERVE <br /> THE BEST
            </Typography>
            <Box paddingRight={{ xs: "none", md: "200px" }}>
              <Typography
                variant="body1"
                color="#5A5959"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  textAlign: { xs: "center", md: "left" },
                }}
                gutterBottom
              >
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </Typography>
            </Box>
            <Box display="flex" justifyContent={{ xs: "center", md: "left" }}>
              <Button variant="contained" color="error">
                Shop Now
              </Button>
              <Button variant="outlined" sx={{ marginLeft: "10px" }}>
                Category
              </Button>
            </Box>
            <Typography
              variant="subtitle1"
              color="#5A5959"
              paddingTop={1}
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                textAlign: { xs: "center", md: "left" },
              }}
              gutterBottom
            >
              Also available on
            </Typography>
            <Box
              display="flex"
              gap="20px"
              justifyContent={{ xs: "center", md: "left" }}
            >
              <img src={FlipCart} />
              <img src={Amazon} />
            </Box>
          </Grid>
        <Grid xs={12} md={6}>
              <Box sx={{display:{xs:"none",md:"block"}}}>
                <img src={Shoe} alt="" />
              </Box>
        </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
