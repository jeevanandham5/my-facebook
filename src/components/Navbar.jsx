import { Facebook } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InputBase from "@mui/material/InputBase";

const Styledtoolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("div")(({ theme }) => ({
  fontSize: "30px",
}));
const Navbar = () => {
  return (
    <Box flex={1}>
      <Box position={"static"}>
        <AppBar>
          <Styledtoolbar>
            <Box display={"flex"} alignItems={"center"}>
              <Facebook sx={{ fontSize: "50px" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", display: { xs: "none", md: "block" } }}
              >
                Facebook
              </Typography>
            </Box>
            <Search>
              <InputBase placeholder="search..."></InputBase>
            </Search>
            <Icons>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginRight: "20px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon sx={{ color: "#fff" }} />
                  </Badge>
                </Box>
                <Box
                  sx={{
                    marginRight: "20px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Badge badgeContent={4} color="error">
                    <NotificationsActiveIcon sx={{ color: "#fff" }} />
                  </Badge>
                </Box>
                <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/300" />
              </Box>
            </Icons>
          </Styledtoolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
