import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Homepage from "./views/HomepageView"

function App() {
  return (
    <Box
      style={{
        background: "linear-gradient(#e0a7b7, #d594c4)",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Box>
  )
}

export default App
