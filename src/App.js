import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";
import YourBooks from "./pages/YourBooks";

import "./App.css";

const API_KEY = "AIzaSyAZzjawqizvFq1A5EUgDH-KzKDTKHiIu9M";
const CLIENT_ID =
  "606450926181-l0fdedurbmeagetom0dt83bnb89itpi8.apps.googleusercontent.com";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="your-books" element={<YourBooks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
