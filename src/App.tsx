import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Requests from "./components/Requests"
import Main from "./components/Main"

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
      </Routes>
    </Router>
  </>
  );
}

export default App;