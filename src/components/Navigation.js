import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { MdArrowUpward as UpArrow } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation({ resetSearch, scrollToTopHandler }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top navbar bg-light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {scrollPosition > 400 && (
          <Nav className="justify-content-center navbar__up-arrow">
            <button className="btn btn--icon" onClick={scrollToTopHandler}>
              <UpArrow />
            </button>
          </Nav>
        )}

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="d-flex align-items-start">
            <Nav.Link href="/projects" className="nav__link">
              Projects
            </Nav.Link>
            <Nav.Link href="/about" className="nav__link">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="nav__link">
              Contact
            </Nav.Link>
            <Nav.Link
              href="https://github.com/boilerplatemax"
              target="_blank"
              rel="nonrefferer"
            >
              <span>Github </span>
              <FaGithub />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca"
              target="_blank"
              rel="nonrefferer"
            >
              <span>LinkedIn </span>
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
