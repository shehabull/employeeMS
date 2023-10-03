import Dashboard from "./Dashboard";
import Employee from "./Employee";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/employee" element={<Employee />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
