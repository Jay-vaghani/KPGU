import { QuizRounded } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function MobileMenuLinks({ title, icon, link, ChangeDrawerStatus }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
      sx={{
        px: 1
      }}
        onClick={() => {
          ChangeDrawerStatus(link);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>
          <Typography variant="button" fontWeight={600} color={"primary"}>
            {title}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default MobileMenuLinks;
