import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import GroceryListPage from "./pages/GroceryListPage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ShelfPage from "./pages/ShelfPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
