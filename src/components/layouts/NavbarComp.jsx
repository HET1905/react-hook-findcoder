import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavbarComp = props => {
  const { icon, title } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <h1>
        <i className={icon} />
        <Navbar.Brand href="#home"> {title}</Navbar.Brand>
      </h1>
      <ul id="navUl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Navbar>
  );
};

NavbarComp.defaultProps = {
  title: "Find Coders",
  icon: "fa fa-user-secret"
};

NavbarComp.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavbarComp;
