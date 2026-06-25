import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Shortcuts from "./Shortcuts";
import { useContext } from "react";
import { ViewContext } from "../../contexts/ViewContext";
import FileComponent from "../FileComponent";
import LeftSidebar from "./LeftSideBar";
import RightSidebar from "./RightSidebar";

export default function Layout({ children }) {
  const Container = ({ children }) => (
    <>
      <Stack
        direction="row"
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "background.default",
        }}
      >
        {children}
      </Stack>
    </>
  );

  const MainContent = ({ children }) => (
    <>
      <Stack sx={{ flex: 1, p: 3 }}>{children}</Stack>
    </>
  );

  const ShortcutBar = ({ children }) => (
    <>
      <Sidebar sx={{ width: 64 }}>
        <Shortcuts />
      </Sidebar>
    </>
  );

  return (
    <Container>
      <ShortcutBar />
      <LeftSidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar />
    </Container>
  );
}
