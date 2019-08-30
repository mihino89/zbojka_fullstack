import React from "react";
import {Formik} from "formik";
import axios from 'axios'
import { withTranslation } from 'react-i18next';

import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

function LandingPage(props) {
    const initFormValues = {
        name: '',
        surname: '',
        phone_number: '',
        email: '',
        message: ''
    };

    const clearValues = (values) => {
        values.name='';
        values.surname = '';
        values.email = '';
        values.phone_number = '';
        values.message = '';
    };
    const {t }  = props;

    const handleSubmit = (values, setSubmitting) => {
        setSubmitting(true);
        console.log(values);

        const form = axios.post('api/form', {
            name: values.name,
            surname: values.surname,
            email: values.email,
            phone_number: values.phone_number,
            message: values.message
        })

        clearValues(values)
        setSubmitting(false);
    }

    return (
        <>
            <Formik
                initialValues={initFormValues}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions.setSubmitting)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      setFieldTouched
                  }) => (
                    <div className="section landing-section">
                        <Container>
                            <Row id="section5">i
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="text-center">
                                        {
                                            t("reservation.title")
                                        }
                                    </h2>
                                    <Form className="contact-form">
                                        <Row>
                                            <Col md="6">
                                                <label>
                                                    {
                                                        t("reservation.name")
                                                    }
                                                </label>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="nc-icon nc-single-02" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder={t("reservation.name")}
                                                        type="text"
                                                        name="name"
                                                        error={touched.name && Boolean(errors.name)}
                                                        value={values.name}
                                                        onChange={(e) => { handleChange(e); setFieldTouched('name', true, false);}}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md="6">
                                                <label>
                                                    {
                                                        t("reservation.surname")
                                                    }
                                                </label>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="nc-icon nc-email-85" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder={t("reservation.surname")}
                                                        type="text"
                                                        name="surname"
                                                        error={touched.surname && Boolean(errors.surname)}
                                                        value={values.surname}
                                                        onChange={(e) => { handleChange(e); setFieldTouched('surname', true, false);}}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md="6">
                                                <label>
                                                    {
                                                        t("reservation.phone_number")
                                                    }
                                                </label>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="nc-icon nc-email-85" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder={t("reservation.phone_number")}
                                                        type="text"
                                                        name="phone_number"
                                                        error={touched.phone_number && Boolean(errors.phone_number)}
                                                        value={values.phone_number}
                                                        onChange={(e) => { handleChange(e); setFieldTouched('phone_number', true, false);}}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md="6">
                                                <label>
                                                    {
                                                        t("reservation.email")
                                                    }
                                                </label>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="nc-icon nc-email-85" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email"
                                                        type="text"
                                                        name="email"
                                                        error={touched.email && Boolean(errors.email)}
                                                        value={values.email}
                                                        onChange={(e) => { handleChange(e); setFieldTouched('email', true, false);}}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <label>
                                            {
                                                t("reservation.message")
                                            }
                                        </label>
                                        <Input
                                            placeholder={t("reservation.message_text")}
                                            type="textarea"
                                            rows="4"
                                            name="message"
                                            error={touched.message && Boolean(errors.message)}
                                            value={values.message}
                                            onChange={(e) => { handleChange(e); setFieldTouched('message', true, false);}}
                                        />
                                        <Row>
                                            <Col className="ml-auto mr-auto" md="4">
                                                <Button
                                                    className="btn-fill"
                                                    color="info"
                                                    size="lg"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleSubmit()
                                                    }}>
                                                    {
                                                        t("reservation.send_button")
                                                    }
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default withTranslation('common')(LandingPage);
