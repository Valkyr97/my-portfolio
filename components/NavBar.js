import Link from "next/link";
import Button from './ButtonDisplay'

const Nav = ({ sidebar, transparent, animate, light, dark }) => {
  return (
    <nav
      className={`position-sticky sticky-top ${
        animate ? "animate__animated animate__fadeInDown animate__delay-1s" : ""
      } navbar navbar-expand p-2 ${
        transparent
          ? "transparent"
          : light
          ? "bg-light"
          : dark
          ? "bg-dark"
          : "bg-success"
      } ${light ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Main Page</a>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Me</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">My Github</a>
            </Link>
          </li>
        </ul>
      </div>
      {sidebar && <Button dark={dark} light={light} />}
    </nav>
  );
};
export default Nav;
