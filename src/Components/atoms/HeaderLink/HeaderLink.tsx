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
        justifyContent: 'flex-start',
        padding: '10px'

    }}>
      <Typography>{headerDetails.title}</Typography>{" "}
      <Link
        to={headerDetails.viewMoreLink}
        style={{ textDecoration: "none", textTransform: "uppercase", color: 'yellow', marginInlineStart: '20px' }}
      >
        VIEW MORE
      </Link>
    </Box>
  );
}

export default HeaderLink;
