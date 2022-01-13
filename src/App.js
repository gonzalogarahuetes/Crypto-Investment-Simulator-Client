import { Routes, Route } from "react-router-dom";
import LandindPage from "./pages/Landing/LandindPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandindPage />} />
      </Routes>
    </>
  );
}

export default App;
