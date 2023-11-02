import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "../components/Navbar.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  // This function makes the navbar transition from transparent to black on scroll

  const [navBackground, setNavBackground] = useState<boolean>(false);
  const navRef = useRef<boolean>(false); // Specify the type as boolean

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={styles.navbg}
        collapseOnSelect
        expand="lg"
        fixed="top"
        variant="dark"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
        }}
      >
        <Navbar.Brand className={styles.brand} as={Link} to="/">
          <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={styles.items} id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link
              className={styles.pagename}
              as={Link}
              eventKey="0"
              to="/"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={styles.pagename}
              as={Link}
              eventKey="1"
              to="/about"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={styles.pagename}
              as={Link}
              eventKey="3"
              to="/careers"
            >
              Careers
            </Nav.Link>
            <Nav.Link
              className={styles.pagename2}
              as={Link}
              eventKey="4"
              to="/contact"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
