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
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { withTranslation } from 'react-i18next';
import { Link as LinkScroll} from "react-scroll";


// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const {t}  = props;


  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpeg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Zbojnícka chata 1960 m.n.m</h1>
            <h3>
              {
                t("headline")
              }
            </h3>
            <br />
            <LinkScroll
                to="section3"
                spy={true}
                smooth={true}
                className="btn-round"
                offset={-70}
                className="btn-round"
                duration= {500}
                style={{cursor: "pointer", fontWeight: "700"}}
            >
              <Button
                className="btn-round mr-1"
                color="neutral"
                outline
              >
                <i className="fa fa-play" />
                {
                  t("see_more")
                }
              </Button>
            </LinkScroll>
            <LinkScroll
                to="section5"
                spy={true}
                smooth={true}
                className="btn-round"
                offset={-70}
                className="btn-round"
                duration= {500}
                style={{cursor: "pointer", fontWeight: "700"}}
            >
              <Button className="btn-round" color="neutral" type="button" outline>
                {
                  t("reservation.title")
                }
              </Button>
            </LinkScroll>
          </div>
        </Container>
      </div>
    </>
  );
}

export default withTranslation('common')(LandingPageHeader);
