import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import GroceryListPage from "./pages/GroceryListPage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ShelfPage from "./pages/ShelfPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CreateAccountPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/like" element={<LikesPage />} />
        <Route path="/shelf" element={<ShelfPage />} />
        <Route path="/groceries" element={<GroceryListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
