import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Requests from "./views/Requests"
import Main from "./views/Main"
import CreateRequest from "./views/CreateRequest"

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path = "/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/show" element={<Requests />} />
        <Route path="/request/create" element={<CreateRequest />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;