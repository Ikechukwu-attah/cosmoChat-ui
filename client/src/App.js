import { Box } from "@mui/material";
import Home from "./pages/home";

function App() {
  return (
    <Box
      flexDirection={"column"}
      marginLeft={"auto"}
      marginRight={"auto"}
      display={"flex"}
      height={"100vh"}
      maxWidth={"1366px"}
      sx={{ bgcolor: "darkblue" }}
    >
      <Home />
    </Box>
  );
}

export default App;
