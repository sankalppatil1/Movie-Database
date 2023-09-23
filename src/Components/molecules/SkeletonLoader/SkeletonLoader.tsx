import { Box, Skeleton } from "@mui/material";
import React from "react";

interface SkeletonLoaderProps {
  carWidthInPx: number;
}

function SkeletonLoader(props: SkeletonLoaderProps) {
  const { carWidthInPx } = props;
  return (
    <Box sx={{ marginInlineStart: "20px", display: 'flex', columnGap: '20px' }}>
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width={carWidthInPx}
        height={(carWidthInPx * 3) / 2}
        sx={{ backgroundColor: "yellow", opacity: "0.1" }}
      />
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width={carWidthInPx}
        height={(carWidthInPx * 3) / 2}
        sx={{ backgroundColor: "yellow", opacity: "0.1" }}
      />
    </Box>
  );
}

export default SkeletonLoader;
