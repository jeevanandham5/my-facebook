import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Images from "./Images";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      margin="5"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Box position="fixed" width={"300px"}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={5}>
            <Box gap={5}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Typography
                  variant="h5"
                  sx={{ paddingRight: "15px", fontWeight: "600" }}
                >
                  Online
                </Typography>
              </StyledBadge>
              <AvatarGroup max={8} margin="50px">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/150?img=15"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pravatar.cc/150?img=30"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://i.pravatar.cc/150?img=20"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://i.pravatar.cc/150?img=9"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </AvatarGroup>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ paddingRight: "15px", fontWeight: "600" }}
                mb="20px"
              >
                Latest Images
              </Typography>
              <Images />
            </Box>
            <Box gap={5}>
              <Typography
                variant="h5"
                sx={{ paddingRight: "15px", fontWeight: "600" }}
              >
                Latest Conversation
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.pravatar.cc/150?img=15"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="https://i.pravatar.cc/150?img=11"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/https://i.pravatar.cc/150?img=10"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
