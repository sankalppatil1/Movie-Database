import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
  headerDetails: { title: string; viewMoreLink: string };
}

function HeaderLink(props: HeaderLinkProps) {
  const { headerDetails } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px",
        alignItems: 'center',
      }}
    >
      <Typography sx={{borderBottom: '2px solid yellow'}}>{headerDetails.title}</Typography>{" "}
      <Link
        to={headerDetails.viewMoreLink}
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "yellow",
          marginInlineStart: "20px",
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          fontSize: '12px',
        }}
      >
        VIEW MORE ...
      </Link>
    </Box>
  );
}

export default HeaderLink;
