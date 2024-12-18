import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Homepage from "./views/HomepageView"
import RepositoriesView from "./views/RepositoriesView"

function App() {
  return (
    <Box
      style={{
        background: "linear-gradient(#6797b1, #494e90)",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/repositories/:username" element={<RepositoriesView />} />
      </Routes>
    </Box>
  )
}

export default App
