import React, { useRef } from "react";
import { Box, SvgIcon } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export interface CarouselInterface {
  children?: any;
  scrollWidthWeb?: number;
  scrollWidthMobile?: number;
  toggleArrow?: number;
}

const Carousel = ({
  children,
  scrollWidthWeb = 200,
  scrollWidthMobile = 300,
}: CarouselInterface) => {
  const carouselEl = useRef(null);
  const arrowStyles = {
    position: "absolute",
    opacity: 0.7,
    height: "30%",
    boxShadow: "yellow",
    backgroundColor: "yellow",
    borderRadius: "8px",
    border: "1px solid black",
    zIndex: "3",
    cursor: "pointer",
    "&.MuiSvgIcon-root": {
      ">path": {
        fill: `black`,
      },
    },
  };

  const scrollHandler = (isLeftScroll: boolean) => {
    const width: number =
      window.innerWidth >= 768 ? scrollWidthWeb : scrollWidthMobile;
    const element: any = carouselEl.current;
    const scrollValue = isLeftScroll
      ? element.scrollLeft - width
      : element.scrollLeft + width;
    element.scrollLeft = scrollValue;
  };

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          width: "100%",
          overflow: "auto",
          scrollBehavior: "smooth",
          [theme.breakpoints.up("md")]: {
            gap: "20px",
            overflow: "hidden",
          },
          "&::-webkit-scrollbar": {
            width: 0,
          },
        })}
        ref={carouselEl}
        id="carousel"
      >
        {children}
      </Box>

      <SvgIcon
        inheritViewBox
        onClick={scrollHandler.bind(null, true)}
        sx={{
          ...arrowStyles,
        }}
        component={ArrowBack}
      />
      <SvgIcon
        inheritViewBox
        onClick={scrollHandler.bind(null, false)}
        sx={{
          ...arrowStyles,
          right: "0px",
        }}
        component={ArrowForward}
      />
    </Box>
  );
};
export default Carousel;