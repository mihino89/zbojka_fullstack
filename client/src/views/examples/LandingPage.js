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

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Pár slov o chate</h2>
                <h5 className="description">
                  Zbojnícka chata má celoročnú prevádzku. Nachádza sa vo Veľkej Studenej doline, ktorú ohraničujú Slavkovský štít, Východná Vysoká, Svišťový štít, Javorový štít, Široká veža, Prostredný hrot a priľahlé hrebene. Je to dolina s najväčším počtom plies (26) rôznych veľkostí a charakterov, je bohatá na tatranskú faunu i flóru. Je tu nespočetné množstvo turistických, horolezeckých, skialpinistických a prírodovedeckých aktivít.
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
                    <h4 className="info-title" style={{marginTop: 0}}>Ubytovanie</h4>
                    <p className="description">
                      Chata má charakter turistickej ubytovne. Ponúka nocľah na poschodových posteliach s kapacitou 16 ľudí. Ubytovaní majú možnosť prípravy vlastných jedál v malej kuchynke pri nocľahárni, kde je k dispozícii plynový varič, úžitková voda a sušiareň. WC je vo vonkajšom priestore za chatou. Kuchyňa je taktiež otvorená celoročne pre všetkých návštevníkov.
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
                    <h4 className="info-title" style={{marginTop: 0}}>Pristup</h4>
                    <p>
                      Na chatu sa môžete dostať modrou značkou zo Starolesnianskej poľany. Na ňu sa dá prísť napríklad z Hrebienka po magistrále. Výstup od Starolesnianskej poľany trvá dve a pol hodiny. Je to pomerne mierne stúpanie, v polovici cesty je kúsok zabezpečený reťazami, potom je stúpanie trochu strmšie a pred chatou sa opäť zmierňuje. Pri Zbojníckej chate končí žltá značka vedúca z Malej studenej doliny cez Priečne sedlo.
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
              <Row>
                <Col md={12}><h2 className="title text-center" style={{color: "#fff"}}>Let's talk about us</h2></Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{color: "#fff"}}>Henry Ford</CardTitle>
                          <h6 className="card-category" style={{color: "#fff"}}>Product Manager</h6>
                        </div>
                      </a>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        Teamwork is so important that it is virtually impossible
                        for you to reach the heights of your capabilities or make
                        the money that you want without becoming very good at it.
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
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4" style={{color: "#fff"}}>Sophie West</CardTitle>
                          <h6 className="card-category" style={{color: "#fff"}}>Designer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        A group becomes a team when each member is sure enough of
                        himself and his contribution to praise the skill of the
                        others. No one can whistle a symphony. It takes an
                        orchestra to play it.
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
                          <h6 className="card-category" style={{color: "#fff"}}>Developer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center" style={{color: "#fff"}}>
                        The strength of the team is each individual member. The
                        strength of each member is the team. If you can laugh
                        together, you can work together, silence isn’t golden,
                        it’s deadly.
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
                <h2 className="text-center" style={{paddingBottom: "3%"}}>Galeria</h2>
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
              <Row >
                <Col md={12}><h2 className="title text-center" style={{color: "#fff"}}>Cennik</h2></Col>
                <Col md="8" style={{textAlign: "center", margin: "0 auto"}}>
                  <Table hover >
                    <thead>
                    <tr style={{color: "#fff"}}>
                      <th >#</th>
                      <th>Osoba/noc</th>
                      <th>Ubytovanie</th>
                      <th>1/2 Penzia</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">1</th>
                      <td>Turisti</td>
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
                      <td>Deti</td>
                      <td>8€</td>
                      <td>18€</td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">5</th>
                      <td>Ranajky</td>
                      <td>6€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">6</th>
                      <td>Vecera</td>
                      <td>7€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">7</th>
                      <td>Pradlo</td>
                      <td>2€</td>
                      <td></td>
                    </tr>
                    <tr style={{color: "#fff"}}>
                      <th scope="row">8</th>
                      <td>Dan z ubytovania</td>
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

export default LandingPage;
