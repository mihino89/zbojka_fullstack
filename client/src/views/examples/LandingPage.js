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
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Gallery from '../index-sections/Gallery'
import PreFooter from '../index-sections/PreFooter'
import Message from '../../components/Message/Message'
import { withTranslation } from 'react-i18next';

function LandingPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const {t, i18n }  = props;

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title" id="section1">
                  {
                    t('welcome.title')
                  }
                </h2>
                <h5 className="description">
                  {
                    t('welcome.title_description')
                  }
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bank" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{marginTop: 0}}>
                      {
                        t('welcome.acommodation_title')
                      }
                    </h4>
                    <p className="description">
                      {
                        t('welcome.acommodation_intro')
                      }
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-compass-05" />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{marginTop: 0}}>
                      {
                        t('welcome.access')
                      }
                    </h4>
                    <p>
                      {
                        t('welcome.access_intro')
                      }
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
            style={{
              backgroundImage: "url(" + require("assets/img/zbojka/gall_3.jpeg") + ")", backgroundPosition: "center center", backgroundSize: "cover", marginTop: 70
            }}
            className="page-header"
            data-parallax={true}
        >
          <div className="filter" />
          <Container style={{color: "#fff"}}>
            <div className="motto text-center">
              <Row id="section2">
                <Col md={12}><h2 className="title text-center" style={{color: "#fff"}}>
                  {
                    t("about_us.title")
                  }
                </h2></Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                          alt="..."
                          src={require("assets/img/faces/vito1.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4" style={{color: "#fff"}}>Vitko Kapusta</CardTitle>
                        <h6 className="card-category" style={{color: "#fff"}}>
                          {
                            t("about_us.first_person.headline")
                          }
                        </h6>
                      </div>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        {
                          t("about_us.first_person.description")
                        }
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                          alt="..."
                          src={require("assets/img/faces/dominika.jpg")}
                      />
                    </div>
                    <CardBody>
                        <div className="author">
                          <CardTitle tag="h4" style={{color: "#fff"}}>Dominika Strapata</CardTitle>
                          <h6 className="card-category" style={{color: "#fff"}}>
                            {
                              t("about_us.second_person.headline")
                            }
                          </h6>
                        </div>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        {
                          t("about_us.second_person.description")
                        }
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{color: "#fff"}}>Robert Orben</CardTitle>
                          <h6 className="card-category" style={{color: "#fff"}}>
                            {
                              t("about_us.third_person.headline")
                            }
                          </h6>
                        </div>
                      </a>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        {
                          t("about_us.third_person.description")
                        }
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 id="section3" className="text-center" style={{paddingBottom: "3%"}}>
                  {
                    t("gallery")
                  }
                </h2>
                <Gallery/>
              </Col>
            </Row>
          </Container>
        </div>

        <div
            style={{
              backgroundImage: "url(" + require("assets/img/zbojka/gall_5.jpeg") + ")", backgroundPosition: "center center", backgroundSize: "cover", marginTop: 70
            }}
            className="page-header"
            data-parallax={true}
        >
          <div className="filter" />
          <Container style={{color: "#fff"} }>
            <div className="motto text-center" >
              <Row id="section4">
                <Col md={12}><h2 className="title text-center" style={{color: "#fff"}}>
                  {
                    t("prices.title")
                  }
                </h2></Col>
                <Col md="8" style={{textAlign: "center", margin: "0 auto"}}>
                  <Table hover >
                    <thead>
                    <tr style={{color: "#fff"}}>
                      <th >#</th>
                      <th>
                        {
                          t("prices.osoba_noc")
                        }
                      </th>
                      <th>
                        {
                          t("prices.accomodation")
                        }
                      </th>
                      <th>
                        {
                          t("prices.semi_pension")
                        }
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">1</th>
                      <td>
                        {
                          t("prices.turists")
                        }
                      </td>
                      <td>22€</td>
                      <td>35€</td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">2</th>
                      <td>Alpenverein</td>
                      <td>20€</td>
                      <td>33€</td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">3</th>
                      <td>KST, JAMES, CHS, KCT</td>
                      <td>11€</td>
                      <td>24€</td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">4</th>
                      <td>
                        {
                          t("prices.children")
                        }
                      </td>
                      <td>8€</td>
                      <td>18€</td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">5</th>
                      <td>
                        {
                          t("prices.breakfast")
                        }
                      </td>
                      <td>6€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">6</th>
                      <td>
                        {
                          t("prices.dinner")
                        }
                      </td>
                      <td>7€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">7</th>
                      <td>
                        {
                          t("prices.bedclothes")
                        }
                      </td>
                      <td>2€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">8</th>
                      <td>
                        {
                          t("prices.taxes")
                        }
                      </td>
                      <td>1€</td>
                      <td></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Message/>
      </div>
      <PreFooter/>
      <DemoFooter />
    </>
  );
}

export default withTranslation('common')(LandingPage);
