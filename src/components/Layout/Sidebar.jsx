import { Paper, Stack } from "@mui/material";

export default function Sidebar({ sx, children }) {
  return (
    <div className="sidebar">
      <Stack as={Paper} sx={{ height: "100vh", p: 2, borderRadius: 0, ...sx }}>
        {children}
      </Stack>
    </div>
  );
}
