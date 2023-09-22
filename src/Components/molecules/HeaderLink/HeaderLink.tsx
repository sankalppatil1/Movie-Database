import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
  headerDetails: { title: string; viewMoreLink: string };
}

function HeaderLink(props: HeaderLinkProps) {
  const { headerDetails } = props;
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 10px'

    }}>
      <Typography>{headerDetails.title}</Typography>{" "}
      <Link
        to={headerDetails.viewMoreLink}
        style={{ textDecoration: "none", textTransform: "uppercase", color: 'yellow' }}
      >
        VIEW MORE
      </Link>
    </Box>
  );
}

export default HeaderLink;
