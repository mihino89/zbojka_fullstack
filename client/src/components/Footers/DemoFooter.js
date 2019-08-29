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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                Tel. cislo: &nbsp;
                <a
                  href="#"
                  target="_blank"
                  style={{fontWeight: "500", display: "inline"}}
                >
                  +421 903 638 000
                </a>
              </li>
              <li style={{fontWeight: "500", display: "inline"}}>
                Email: &nbsp;
                <a
                  href="#"
                  target="_blank"
                  style={{fontWeight: "500", display: "inline", textTransform:"lowercase"}}
                >
                   rezervacie@zbojnickachata.sk
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim and Martin Mihalovic
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
