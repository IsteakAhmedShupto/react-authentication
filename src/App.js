import { Link } from "react-router-dom";
import Views from "./Views";

function App() {
  return (
    <div>
      <Link to="/" style={{ paddingRight: "1rem" }}>
        Sign in
      </Link>
      <Link to="/home" style={{ paddingRight: "1rem" }}>
        Home
      </Link>
      <Link to="/account">Account</Link>
      <Views />
    </div>
  );
}

export default App;
