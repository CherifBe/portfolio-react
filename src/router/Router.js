import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../layouts/navigation";
import Main from "../pages/main";
import Contact from "../pages/contact";
import NoMatch from "./NoMatch";

const Routeur = () => {
    return (
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    );
  };
  
  export default Routeur;
  