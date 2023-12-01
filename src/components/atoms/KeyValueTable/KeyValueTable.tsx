import { Box, Theme, useTheme } from "@mui/material";
import React from "react";

interface KeyValueField {
  key: string;
  value: string;
  redirection?: () => void;
}

function KeyValueTable(props: { keyValueData: KeyValueField[] }) {
  const { keyValueData } = props;
  const theme: Theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: ["100%", "60%"],
        margin: "20px",
      }}
    >
      {keyValueData.map((data: KeyValueField) => {
        return data.value ? (
          <Box key={data.key} sx={{ display: "flex", mb: "10px" }}>
            <Box sx={{ width: "30%" }}>{data.key}</Box>
            <Box
              onClick={data.redirection ? data.redirection : undefined}
              sx={{
                color: `${theme.palette.text.primary}`,
                width: "80%",
                cursor: data.redirection ? "pointer" : "initial",
                textDecoration: data.redirection ? "underline" : "none",
              }}
            >
              {data.value}
            </Box>
          </Box>
        ) : null;
      })}
    </Box>
  );
}

export default KeyValueTable;
