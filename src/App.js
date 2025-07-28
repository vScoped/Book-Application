/* TODO - useContext (is the Context API https://www.w3schools.com/react/react_usecontext.asp ) for user details, new [isSignedIn, setIsSignedIn] useState(false), dark/light themes (Context API) */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";
import YourBooks from "./pages/YourBooks";
import SignUpFormComponent from "./pages/SignUpFormComponent";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUpFormComponent />} />
          <Route path="search" element={<Search />} />
          <Route path="your-books" element={<YourBooks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
