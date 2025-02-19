import  { useState } from "react";
import WalletConnection from "../../WalletConnection";
import { Link } from "react-router-dom";

function Nav() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle navbar open/close
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false); // Close navbar on link click
  };

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg pt-3 pb-3"
        id="nav"
        data-bs-spy="scroll"
        data-bs-target="#nav"
        data-bs-offset="70"
        tabIndex="0"
      >
        <div className="container">
          <img
            style={{ width: "7%" }}
            src="/images/ecdost.png"
            alt="logo"
            loading="eager"
            className="object-fit-contain position-relative"
          />

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavbarToggle} // Handle toggle click
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen} // Reflect the state in aria-expanded
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : ""
            }`} // Add 'show' class if navbar is open
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-underline mx-auto mt-3 mt-lg-0 mb-5 mb-lg-0 fw-lighter align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={closeNavbar} // Close navbar on link click
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/About"
                  onClick={closeNavbar}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/WMP"
                  onClick={closeNavbar}
                >
                  WMP
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropbtn"><Link className="nav-link" to="/Properties">Properties  </Link></button>
                  {/* <div className="dropdown-content">
                    <Link to="/Bronze" onClick={closeNavbar}>
                      Bronze
                    </Link>
                    <Link to="/Silver" onClick={closeNavbar}>
                      Silver
                    </Link>
                    <Link to="/Gold" onClick={closeNavbar}>
                      Gold
                    </Link>
                    <Link to="/Platinum" onClick={closeNavbar}>
                      Platinum
                    </Link>
                    <Link to="/Diamond" onClick={closeNavbar}>
                      Diamond
                    </Link>
                    
                    
                  </div> */}
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/staking"
                  onClick={closeNavbar}
                >
                  MY Staking
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Partner"
                  onClick={closeNavbar}
                >
                  Partner
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link
                  className="nav-link"
                  to="/"
                  onClick={closeNavbar}
                >
                  Contact
                </Link> */}
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row align-items-center gap-4 justify-content-center ">
              <div className="btn btn-connect">
                <WalletConnection />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
