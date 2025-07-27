import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page routes
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import TV from "./pages/TV";
import NoPage from "./pages/NoPage";

// for styling (important!)
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    {/* Routes of the App */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="movies" element={<Movies />} />
          <Route path="books" element={<Books />} />
          <Route path="tv" element={<TV />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);