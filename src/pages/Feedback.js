import React, { useState } from "react"
import { Form, Field, Formik } from "formik"
import * as Yup from "yup"
import { Button, FormGroup, Row, Col } from "reactstrap"
import axios from "axios"
import { baseUrl } from "../Url"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"
import styled from "styled-components/macro"
import Alert from "../components/Alert"
import { StdFormInfoCol, StdFormCol } from "../components/FormStandard"

export default () => {
  const [isModalOpen, setModal] = useState(false)
  const toggleModal = () => setModal(!isModalOpen)

  const validationSchema = Yup.object().shape({
    requester_email: Yup.string().required("Chybí email").email("Neplatný email").max(100, "Email je příliš dlouhý"),
    feedback_topic: Yup.string(),
    feedback_description: Yup.string().max(1000, "Popis je příliš dlouhý").required("Chybí popis"),
  })

  const initialValues = {
    requester_email: "",
    requester_name: "",
    requester_surname: "",
    feedback_topic: "",
    feedback_description: "",
  }

  const onSubmit = (values) => {
    toggleModal()
    axios.get(baseUrl, {
      params: {
        api_name: "post_feedback",
        email: values.requester_email,
        topic: values.feedback_topic,
        content: values.feedback_description,
      },
    })
  }

  return (
    <PageWrap>
      <Alert
        isOpen={isModalOpen}
        toggle={toggleModal}
        body="Vaše otázka byla odeslána. Teď už jen počkejte na email s odpovědí."
        buttonLabel="Ok"
      ></Alert>
      <Row className="justify-content-center mb-4">
        <StdFormInfoCol>
          <h3>Pomozte i nám!</h3>
          <p>
            Máte nápad na vylepšení aplikace nebo vám něco nefunguje jak má? Neváhejte nás kontaktovat. Vážíme si zpětné
            vazby a budeme rádi, za jakékoli relevantní připomínky. <b>Děkujeme!</b>
          </p>
        </StdFormInfoCol>
      </Row>
      <Row>
        <Col>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
              <Form>
                <Row className="justify-content-center">
                  <StdFormCol>
                    <FormGroup>
                      <Field
                        label="Jméno"
                        name="requester_name"
                        type="text"
                        placeholder="Vaše jméno a příjmení."
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Email*"
                        name="requester_email"
                        type="text"
                        placeholder="Vyplňte email, abychom vás mohli kontaktovat."
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Předmět"
                        name="feedback_topic"
                        type="text"
                        placeholder="O co se jedná?"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Popis*"
                        id="feedback_description"
                        name="feedback_description"
                        type="textarea"
                        rows="4"
                        placeholder="Napiště nám zprávu. Popiště váš nápad či připomínku detailněji."
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </StdFormCol>
                </Row>
                <Row>
                  <Col align="center">
                    <Button outline color="primary" type="submit">
                      Poslat připomínku
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </PageWrap>
  )
}
