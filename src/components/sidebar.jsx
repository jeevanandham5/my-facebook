import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ListItemIcon2 = styled(ListItemIcon)({
  "&:hover": { color: "#037bfc" },
});
const sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <InboxIcon />
              </ListItemIcon2>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <DraftsIcon />
              </ListItemIcon2>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <AccountBoxIcon />
              </ListItemIcon2>
              <ListItemText primary="your Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <GroupAddIcon />
              </ListItemIcon2>
              <ListItemText primary="AddFriends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <Diversity1Icon />
              </ListItemIcon2>
              <ListItemText primary="YourFriends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <NotificationsActiveIcon />
              </ListItemIcon2>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <SettingsIcon
                  sx={{
                    rotate: "0deg",
                    "&:hover": { rotate: "300deg", transition: "0.50s" },
                  }}
                />
              </ListItemIcon2>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon2>
                <HelpIcon />
              </ListItemIcon2>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText
                  primary={<Brightness4Icon />}
                  sx={{ marginRight: "20px" }}
                />

                <Switch
                  onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default sidebar;
