import { Link } from "react-router-dom";
import './Navbar.scss';

const Navigationbar = () => {
  return (
        <div className="w-100" id="home">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand">
              <span>Ben</span>
              <span>Ciné</span>
            </div>
            <div className="navbar-items navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/films">Films</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/séries">Séries</Link>
                </li>
              </ul>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Recherche" />
            </form>
          </nav>
        </div>
  );
};
export default Navigationbar;