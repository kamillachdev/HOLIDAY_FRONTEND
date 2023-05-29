import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Forgot from "./views/Forgot";
import Requests from "./views/Requests"
import Main from "./views/Main"
import Menu from "./views/Menu"

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path = "/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;