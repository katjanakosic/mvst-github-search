import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Homepage from "./views/HomepageView"
import RepositoriesView from "./views/RepositoriesView"

function App() {
  return (
    <Box
      style={{
        background: "#0e1116",
        width: "100%",
        minHeight: "100vh",
        color: "white"
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
