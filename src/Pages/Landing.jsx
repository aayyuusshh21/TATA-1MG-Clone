import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Landing() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
      {/* <Footer /> */}
    </div>
  );
}

export default Landing;
