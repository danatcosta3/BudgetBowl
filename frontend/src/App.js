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
import FeedPage from "./pages/FeedPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<CreateAccountPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path="/like"
          element={
            <ProtectedRoute>
              <LikesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shelf"
          element={
            <ProtectedRoute>
              <ShelfPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groceries"
          element={
            <ProtectedRoute>
              <GroceryListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
