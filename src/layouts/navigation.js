// TODO: FAIRE COMPONENT POUR HEADER ET FOOTER

import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <>
      <header>
        Je suis un header
      </header>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {children}

      <footer>
        Je suis un footer
      </footer>
    </>
  );
};

export default Navigation;
