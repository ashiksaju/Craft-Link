import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4">CRAFT LINK</h1>
      <div>
        <Link to="/login" className="btn btn-primary me-3">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
    
  );
}

export default App;
