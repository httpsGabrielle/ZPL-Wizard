import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function ElementsList() {
  const elements = [
    { name: "Texto", icon: "mingcute:text-2-line" },
    { name: "Imagem", icon: "mingcute:pic-ai-line" },
    { name: "QR Code", icon: "mingcute:qrcode-2-line" },
  ];

  const ElementComponent = ({ name, icon }) => (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "center",
        p: 1,
        borderRadius: 1,
        cursor: "pointer",
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <Icon icon={icon} width="21" />
      <Typography>{name}</Typography>
    </Stack>
  );

  return (
    <>
      <Typography sx={{ fontWeight: "bold", mb: 3 }}>Elementos</Typography>
      <Stack>
        {elements.map((element, index) => (
          <ElementComponent {...element} />
        ))}
      </Stack>
    </>
  );
}
