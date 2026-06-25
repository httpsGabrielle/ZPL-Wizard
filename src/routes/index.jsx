import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playground from "../pages/Playground";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
