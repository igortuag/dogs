import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import User from "./components/User/User.js";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route exact path="user/*" element={<ProtectedRoute />}>
            <Route path="user/*" element={<User />} />
          </Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
