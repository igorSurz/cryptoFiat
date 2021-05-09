
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://surzhko.info/">
              About Us
            </NavLink>
          </NavItem>         
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://surzhko.info/"
            target="_blank"
            rel="noreferrer"
          >
            Igor Surzhko
          </a>{" "}
          for fun.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
