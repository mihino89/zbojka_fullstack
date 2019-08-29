/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import { Link as LinkScroll} from "react-scroll";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [index, setIndex] = useState(0);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const countries = ["svk", "GB", "DE", "PL" ];

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="200"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Zbojnicka chata
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <LinkScroll
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  className="nav-link"
                  style={{cursor: "pointer"}}
              >
                <i className="nc-icon nc-bank" /> O chate
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  className="nav-link"
                  style={{cursor: "pointer"}}
              >
                <i className="nc-icon nc-badge" /> My
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  className="nav-link"
                  style={{cursor: "pointer"}}
              >
                <i className="nc-icon nc-album-2" /> Galeria
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  className="nav-link"
                  style={{cursor: "pointer"}}
              >
                <i className="nc-icon nc-cart-simple" /> Cenník
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  className="nav-link"
                  style={{cursor: "pointer"}}
              >
                <i className="nc-icon nc-email-85" /> Kontakt
              </LinkScroll>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/zbojnicka/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/zbojnicka_chata/?hl=cs"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  id="dropdownMenuButton"
                  nav
                  onClick={e => e.preventDefault()}
                  role="button"
              >
                <img src= {require(`assets/img/flags/${countries[index]}.png`)} alt=""/>
              </DropdownToggle>
              <DropdownMenu
                  aria-labelledby="dropdownMenuButton"
                  className="dropdown-info"
                  style={{minWidth: "5rem"}}
              >
                {
                  countries.map((res) => {
                    if(res !== countries[index]){
                      return (
                          <DropdownItem
                              onClick={e => {
                                e.preventDefault();
                                setIndex(countries.indexOf(res))
                              }}
                              style={{padding: "10% 15% 0 15%", textAlign: "center"}}
                          >
                            <img src= {require(`assets/img/flags/${res}.png`)} alt=""/>
                          </DropdownItem>
                      )
                    }
                  })
                }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
