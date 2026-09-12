import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section">
      <div className="container">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
