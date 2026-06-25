import { Stack, TextField, Typography } from "@mui/material";

import { useContext, useState } from "react";

import { ZPLContext } from "../contexts/ZPLContext.jsx";

export default function FileComponent() {
  const [onEditMode, setOnEditMode] = useState(false);

  const { fileTitle, setFileTitle, elements, setElements } = useContext(ZPLContext);

  return (
    <>
      <Stack spacing={3}>
        {onEditMode ? (
          <TextField
            size="small"
            variant="standard"
            value={fileTitle}
            onChange={(e) => setFileTitle(e.target.value)}
            onBlur={() => setOnEditMode(false)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setOnEditMode(false);
              }
            }}
          />
        ) : (
          <Typography onClick={() => setOnEditMode(true)} sx={{ cursor: "text" }}>
            {fileTitle}
          </Typography>
        )}

        <Typography sx={{ fontWeight: "bold" }}>Layout</Typography>

        <Typography sx={{ fontWeight: "bold" }}>Elementos</Typography>

        {elements?.map((element, index) => (
          <Typography key={index}>{element.name}</Typography>
        ))}
      </Stack>
    </>
  );
}
