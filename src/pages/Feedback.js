import React from "react"
import { Form, Field, Formik } from "formik"
import * as Yup from "yup"
import { Button, FormGroup, Row, Col } from "reactstrap"
import axios from "axios"
import { baseUrl } from "../Url"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"
import styled from "styled-components/macro"

const MaxWidthButton = styled(Button)`
  max-width: 300px;
`

export default ({ errors, touched }) => {
  const validationSchema = Yup.object().shape({
    requester_email: Yup.string()
      .required("Email je povinný")
      .email("Neplatný email. Systém očekává formát honza.novak@seznam.cz")
      .max(100, "Email je příliš dlouhý"),
    feedback_topic: Yup.string().required("Chybí předmět"),
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
    console.log("Request should be send with these values:", values)
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
      <Row>
        <Col>
          <h3>Pomozte nám pomáhat!</h3>
          <p>
            Něco Vám nefunguje tak jak má? Máte nápad na možné vylepšení této aplikace? Nebo máte jakoukoli jinou
            relevantní připomínku?{" "}
          </p>
          <p>
            Pokud jste odpověděl/a ANO na jakoukoli z výše položených otázek, tak prosím neváhejte a vyplňte formulář
            níže. Zabere Vám to 2 minuty. Vaše zpětné vazby bereme velice vážně a jsme za ně velice vděční.{" "}
            <b>Děkujeme</b>
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Field
                        label="Jméno"
                        name="requester_name"
                        type="text"
                        placeholder="Jméno"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup>
                      <Field
                        label="Příjmení"
                        name="requester_surname"
                        type="text"
                        placeholder="Příjmení"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Field
                        label="Email"
                        name="requester_email"
                        type="text"
                        placeholder="Ve formatu např. honza.novak@seznam.cz"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Field
                        label="předmět"
                        name="feedback_topic"
                        type="text"
                        placeholder="Např. Stížnost nebo Návrh na vylepšení"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Field
                        label="Popis"
                        id="feedback_description"
                        name="feedback_description"
                        type="textarea"
                        rows="4"
                        placeholder="Např. Nenačítá se mi mapa"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col align="center">
                    <MaxWidthButton className="btn-lg btn-dark btn-block submit-button" type="submit">
                      Poslat připomínku
                    </MaxWidthButton>
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
