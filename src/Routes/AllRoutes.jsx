import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import { Products } from "../Pages/Products";
import SignUp from "../Pages/Signup";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/medicine" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
