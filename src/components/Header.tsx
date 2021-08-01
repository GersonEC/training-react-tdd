import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments App</Link>
        </li>
      </ul>
    </div>
  );
}
