import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Adding from "./components/Adding";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const darktheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <br />
        <br />
        <br />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Adding />
      </Box>
    </ThemeProvider>
  );
}

export default App;
