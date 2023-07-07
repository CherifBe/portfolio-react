// TODO: FAIRE COMPONENT POUR HEADER ET FOOTER

import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <>
    <div className="header-navbar">
      <header>
        PortFolio
      </header>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

      {children}

      <footer>
        Tout droit réservé
      </footer>
    </>
  );
};

export default Navigation;
