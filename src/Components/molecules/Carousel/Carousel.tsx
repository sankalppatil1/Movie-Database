import React, { useEffect, useRef, useState } from "react";
import { Box, SvgIcon } from "@mui/material";
import { LeftArrowIcon, RightArrowIcon } from "../../../assets/Icons";

export interface CarouselInterface {
  children?: any;
  scrollWidthWeb?: number;
  scrollWidthMobile?: number;
  toggleArrow?: number;
}

const Carousel = ({
  children,
  scrollWidthWeb = 400,
  scrollWidthMobile = 330,
  toggleArrow = 0,
}: CarouselInterface) => {
  const carouselEl = useRef(null);
  const arrowStyles = {
    width: "24px",
    height: "24px",
    verticalAlign: "middle",
  };
  const [isLeftDissabled, setIsLeftDissabled] = useState(true);
  const [isRightDissabled, setIsRightDissabled] = useState(false);

  useEffect(() => {
    const element: any = carouselEl.current;
    setIsLeftDissabled(
      element.scrollLeft >= element.scrollWidth - element.clientWidth
    );
    setIsRightDissabled(element.scrollLeft <= 0);
  }, [toggleArrow]);

  const scrollHandler = (isLeftScroll: boolean) => {
    const width: number =
      window.innerWidth >= 768 ? scrollWidthWeb : scrollWidthMobile;
    const element: any = carouselEl.current;
    const scrollValue = isLeftScroll
      ? element.scrollLeft - width
      : element.scrollLeft + width;
    element.scrollLeft = scrollValue;

    if (!isLeftDissabled || !isRightDissabled) {
      setIsLeftDissabled(
        scrollValue * -1 > element.scrollWidth - element.clientWidth
      );
      setIsRightDissabled(scrollValue * -1 <= 0);
    }
  };

  return (
    <>
      <Box
        data-testid={"carousel"}
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          width: "100%",
          overflow: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "20px",
          [theme.breakpoints.up("md")]: {
            gap: "20px",
            maxWidth: "1180px",
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
          data-testid={
            isLeftDissabled ? "carouselLeftArrowDisabled" : "carouselLeftArrow"
          }
          onClick={scrollHandler.bind(null, true)}
          sx={{
            ...arrowStyles,
            "&.MuiSvgIcon-root": {
              ">path": {
                fill: `${isLeftDissabled ? "grey" : "yellow"}`,
              },
            },
          }}
          component={LeftArrowIcon}
        />
        <SvgIcon
          inheritViewBox
          onClick={scrollHandler.bind(null, false)}
          data-testid={
            isRightDissabled
              ? "carouselRightArrowDisabled"
              : "carouselRightArrow"
          }
          sx={{
            ...arrowStyles,
            "&.MuiSvgIcon-root": {
              ">path": {
                fill: `${isRightDissabled ? "grey" : "yellow"}`,
              },
            },
          }}
          component={RightArrowIcon}
        />
      </Box>
    </>
  );
};
export default Carousel;
