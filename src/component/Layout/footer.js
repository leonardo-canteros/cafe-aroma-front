import React from "react";
import { Container, Row, Col, Image, NavLink, Nav } from "react-bootstrap";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import "./footer.css";
import logo from "../../assets/img/logo-cafe-aroma.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container fluid className="Footer">
        <Row className="text-white p-4 fs-4">
          <Col md="4">
            <div className="stack">
              <Image src={logo} alt="Logo Café Aroma" className="Image" />
              <p>Café Aroma</p>
            </div>
          </Col>
          <Col>
            <Row className="Navegador-Footer">
              <Nav className="flex-colum fs-5">
                <NavLink as={Link} to="/" className="nav-link text-white" exact>
                  Inicio
                </NavLink>
                <NavLink as={Link} to="/about" className="nav-link text-white">
                  Acerca De Nosotros
                </NavLink>
                <NavLink as={Link} to="/contacto" className="nav-link text-white">
                  Contactanos
                </NavLink>
              </Nav>
            </Row>
            <Row className="Social-Icons">
              <Nav>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/home"
                >
                  <TiSocialTwitter className="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                >
                  <TiSocialInstagram className="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                >
                  <TiSocialFacebook className="Icon" />
                </a>
              </Nav>
            </Row>
            <Row className="Copyright fs-5">
              <p>© Café Aroma 2024 | Todos los Derechos Reservados</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
