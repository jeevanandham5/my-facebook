import { Box } from "@mui/material";
import React from "react";
import FeedCard from "./FeedCard";

const Feed = () => {
  return (
    <Box flex={4} bgcolor="grey">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </Box>
  );
};

export default Feed;
