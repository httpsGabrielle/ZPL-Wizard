import { Icon } from "@iconify/react";
import { Avatar, IconButton, Stack, Tooltip } from "@mui/material";
import logo from "../../assets/logotype/logo.svg";
import { useContext } from "react";
import { ViewContext } from "../../contexts/ViewContext.jsx";

export default function Shortcuts() {
  const { leftBarView, setLeftBarView } = useContext(ViewContext);

  const shortcuts = [
    { name: "Arquivo", icon: "mingcute:edit-line", onSelect: () => setLeftBarView("file") },
    { name: "Add Elementos", icon: "mingcute:classify-add-2-line", onSelect: () => setLeftBarView("elements") },
    { name: "ZPL", icon: "mingcute:code-line", onSelect: () => setLeftBarView("zpl") },
  ];

  const ShortcutItem = ({ name, icon, onSelect }) => (
    <div>
      <Tooltip title={name}>
        <IconButton onClick={onSelect}>
          <Icon icon={icon} width="18px" />
        </IconButton>
      </Tooltip>
    </div>
  );

  return (
    <>
      <Stack spacing={1}>
        <Avatar alt="ZPL Wizard App Logo" src={logo} sx={{ width: 32, height: 32, mb: 5 }} variant="rounded" />
        {shortcuts.map((shortcut, index) => (
          <ShortcutItem key={index} {...shortcut} />
        ))}
      </Stack>
    </>
  );
}
