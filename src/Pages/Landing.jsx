import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Newnavbar from "../Components/Newnavbar/Newnavbar";
import Login from "./Login";

function Landing() {
  return (
    <div>
      <Newnavbar />
      <Link to="/">Home</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">
        <Login />
      </Link>
      <Footer />
    </div>
  );
}

export default Landing;
