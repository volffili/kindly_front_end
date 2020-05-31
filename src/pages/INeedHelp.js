import React, { useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { baseUrl } from "../Url"
import { FormGroup, Label, Row, Col, Button } from "reactstrap"
import LocationAutocomplete from "../components/LocationAutocomplete"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"
import { StdFormInfoCol, StdFormCol } from "../components/FormStandard"
import Alert from "../components/Alert"

export default () => {
  const [address, setAddress] = useState({})
  const [isModalOpen, setModal] = useState(false)
  const toggleModal = () => setModal(!isModalOpen)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Chybí jméno"),
    email: Yup.string().email("Neplatný email").required("Chybí email"),
    phone_number: Yup.string(),
    request_topic: Yup.string().required("Chybí předmět"),
    request_description: Yup.string().required("Chybí popis"),
  })

  const initialValues = {
    name: "",
    phone_number: "",
    email: "",
    request_topic: "",
    request_description: "",
  }

  const onSubmit = (values) => {
    toggleModal()
    let query_params = {
      api_name: "post_help_request",
      requester_name: values.name,
      requester_age: null,
      requester_email: values.email,
      requester_phone_number: values.phone_number,
      requester_address: address.formatted_address,
      requester_address_lat: address.lat,
      requester_address_lng: address.lng,
      request_topic: values.request_topic,
      request_details: values.request_description,
    }
    console.log("Query Params = ", query_params)

    axios.get(baseUrl, {
      params: query_params,
    })
  }

  return (
    <PageWrap>
      <Alert
        isOpen={isModalOpen}
        toggle={toggleModal}
        body="Vaše žádost o pomoc byla odeslána. Teď už jen počkejte, až vám přijde email s nabídkou pomoci."
        buttonLabel="Ok"
      ></Alert>
      <Row className="justify-content-center mb-4">
        <StdFormInfoCol>
          <h3>S čím potřebujete pomoci?</h3>
          <p>
            Každý z nás se občas dostane do situace, kdy si neví rady. Nebojte se a požádejte o pomoc. Ať už se jedná o
            výměnu žárovky, přivrtání poličky, donesení nákupu či venčení psa. Pokusíme se vás propojit s lidmi z vašeho
            okolí, kteří rádi podají pomocnou ruku.
          </p>
        </StdFormInfoCol>
      </Row>
      <Row>
        <Col>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
              <Form className="askhelp-form">
                <Row className="justify-content-center">
                  <StdFormCol>
                    <FormGroup>
                      <Field
                        label="Jméno*"
                        id="name"
                        name="name"
                        component={ReactstrapInput}
                        type="text"
                        placeholder="Vaše jméno a příjmení."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="requester_address">Adresa</Label>
                      <LocationAutocomplete
                        id="requester_address"
                        onAddressSelect={setAddress}
                        placeholder="Vaše adresa nebude nikde zobrazena, pouze určí lokalitu."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Email*"
                        component={ReactstrapInput}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Vyplňte email, aby vás pomocníci mohli kontaktovat."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Telefon"
                        component={ReactstrapInput}
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        placeholder="Pokud chcete pomoc urychlit, můžete vyplnit i telefon. "
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Předmět*"
                        component={ReactstrapInput}
                        id="request_topic"
                        name="request_topic"
                        type="text"
                        placeholder="S čím potřebujete pomoci?"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        label="Popis*"
                        component={ReactstrapInput}
                        id="request_description"
                        name="request_description"
                        type="textarea"
                        rows="4"
                        placeholder="Popiště co nejpřesněji o co se jedná, aby pomocník přišel připravený. Bude potřeba přinést nářadí?"
                      />
                    </FormGroup>
                  </StdFormCol>
                </Row>
                <Row>
                  <Col align="center">
                    <Button outline color="primary" type="submit">
                      Poslat žádost
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
