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
import { withTranslation } from 'react-i18next';

// reactstrap components
import {Row, Container, Col, Card, CardBody, CardTitle} from "reactstrap";

function PreFooter(props) {
    const {t }  = props;

    return (
        <div
            style={{
                backgroundImage: "url(" + require("assets/img/zbojka/gall_7.jpeg") + ")", backgroundPosition: "center center", backgroundSize: "cover"
            }}
            className="page-header"
            data-parallax={true}
        >
            <div className="filter" />
            <Container style={{color: "#fff"}}>
                <div className="motto text-center">
                    <Row md={12}>
                        <Col>
                            <h2 className="title text-center" style={{color: "#fff"}}>
                                {
                                    t("owners")
                                }
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center ml-auto mr-auto text-center" md="12">
                        <Col md="3" sm="6">
                            <img
                                className="partnersR"
                                alt="..."
                                src={require("assets/img/zbojka/logo/james.jpg")}
                                style={{maxHeight: 150}}
                            />
                        </Col>
                        <Col md="3" sm="6">
                            <img
                                className="partnersL"
                                alt="..."
                                src={require("assets/img/zbojka/logo/kst.png")}
                                style={{maxHeight: 150}}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <h2 className="title text-center" style={{color: "#fff"}}>
                                {
                                    t('partners')
                                }
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col col-sm-6 col-lg-3>
                            <div className="description">
                                <img
                                    alt="..."
                                    src={require("assets/img/zbojka/logo/norskamoda.png")}
                                    style={{maxHeight: 150,maxWidth: 150, paddingTop: 20}}
                                />
                            </div>
                        </Col>
                        <Col col-sm-6 col-lg-3>
                            <div className="description">
                                <img
                                    alt="..."
                                    src={require("assets/img/zbojka/logo/karitraa.png")}
                                    style={{maxHeight: 150, maxWidth: 150, paddingTop: 20}}
                                />
                            </div>
                        </Col>
                        <Col col-sm-6 col-lg-3>
                            <div className="description">
                                <img
                                    alt="..."
                                    src={require("assets/img/zbojka/logo/bergans.svg")}
                                    style={{maxHeight: 150, maxWidth: 150, paddingTop: 40}}
                                />
                            </div>
                        </Col>
                        <Col col-sm-6 col-lg-3>
                            <div className="description">
                                <img
                                    alt="..."
                                    src={require("assets/img/zbojka/logo/devold.jpg")}
                                    style={{maxHeight: 150, maxWidth: 150, paddingTop: 40}}
                                />
                            </div>
                        </Col>
                        <Col col-sm-6 col-lg-3>
                            <div className="description">
                                <img
                                    alt="..."
                                    src={require("assets/img/zbojka/logo/norwayshop.png")}
                                    style={{maxHeight: 150,maxWidth: 150, paddingTop: 20}}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default withTranslation('common')(PreFooter);