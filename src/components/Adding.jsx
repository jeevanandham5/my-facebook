import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DateRangeIcon from "@mui/icons-material/DateRange";

const AddBox = styled(Box)({
  width: "400px",
  height: "380px",
  padding: "10px",
  borderRadius: "15px",
  background: "#fff",
});
const NewModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
  gap: "10px",
  marginBottom: "30px",
  padding: "20px",
});

const Adding = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box bgcolor={"Background.default"} color={"text.primary"}>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Add post"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "Calc(50% - 25px )", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <NewModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddBox>
            <Typography variant="h5" color={"gray"} textAlign={"center"}>
              Creat post
            </Typography>
            <Userbox>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: "50px", height: "50px" }}
                src="https://i.pravatar.cc/150?img=13"
              />
              <Typography
                variant="span"
                sx={{ fontWeight: "600", color: "#000" }}
              >
                john paul
              </Typography>
            </Userbox>
            <TextField
              sx={{ width: "100%", marginBottom: "20px" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack
              direction={"row"}
              gap={1}
              sx={{ marginTop: 1, marginBottom: 3 }}
            >
              <EmojiEmotionsIcon color="warning" />
              <InsertPhotoIcon color="info" />
              <LocalOfferIcon />
              <VideoCameraBackIcon color="info" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button>
                <DateRangeIcon />
              </Button>
            </ButtonGroup>
          </AddBox>
        </NewModal>
      </Box>
    </>
  );
};

export default Adding;
