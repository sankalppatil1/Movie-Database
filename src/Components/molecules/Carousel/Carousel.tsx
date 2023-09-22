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
  scrollWidthMobile = 200,
}: CarouselInterface) => {
  const carouselEl = useRef(null);
  const arrowStyles = {
    width: "24px",
    height: "24px",
    verticalAlign: "middle",
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
    <>
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
      <Box
        sx={(theme) => ({
          width: "100%",
          maxWidth: "1180px",
          display: "flex",
          gap: "32px",
          justifyContent: "start",
          cursor: "pointer",
        })}
      >
        <SvgIcon
          inheritViewBox
          onClick={scrollHandler.bind(null, true)}
          sx={{
            ...arrowStyles,
            "&.MuiSvgIcon-root": {
              ">path": {
                fill: `yellow`,
              },
            },
          }}
          component={ArrowBack}
        />
        <SvgIcon
          inheritViewBox
          onClick={scrollHandler.bind(null, false)}
          sx={{
            ...arrowStyles,
            "&.MuiSvgIcon-root": {
              ">path": {
                fill: `yellow`,
              },
            },
          }}
          component={ArrowForward}
        />
      </Box>
    </>
  );
};
export default Carousel;
