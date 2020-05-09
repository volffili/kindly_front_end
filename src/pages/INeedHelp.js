import React, { useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { baseUrl } from "../Url"
import { Button, FormGroup, Label, Row, Col } from "reactstrap"
import LocationAutocomplete from "../components/LocationAutocomplete"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"
import styled from "styled-components/macro"
import Alert from "../components/Alert"

const MaxWidthButton = styled(Button)`
  max-width: 300px;
`

export default () => {
  const [address, setAddress] = useState({})
  const [isModalOpen, setModal] = useState(false)
  const toggleModal = () => setModal(!isModalOpen)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Jméno je povinné pole"),
    age: Yup.number().typeError("Věk musí být číslo"),
    email: Yup.string()
      .email("Neplatný email. Systém očekává formát honza.novak@seznam.cz")
      .required("Email je povinné pole"),
    phone_number: Yup.string(),
    request_topic: Yup.string().required("Předmět je povinné pole"),
    request_description: Yup.string().required("Popis žádosti je povinné pole"),
  })

  const initialValues = {
    name: "",
    surname: "",
    age: "",
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
      requester_age: values.age,
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
        title="Title"
        body="Teď už jen stačí počkat než se ti někdo ozve! asldfkasjdlfk jsadfl dfk jalsfldskaj fa adlkfj Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a veče "
        buttonLabel="Dobře"
      ></Alert>
      <Row>
        <Col>
          <h3>Čím Vám ostatní mohou pomoci?</h3>
          <p>
            Každý se občas dostane do situace kdy potřebuje pomoct. blabla lorem ipsum tady nejak text a ladf asdf ahoj
            jak se mas, vcera jse mse mel dobre , dnes taky
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {() => (
              <Form className="askhelp-form">
                <Row>
                  <Col sm="5">
                    <FormGroup>
                      <Field
                        label="Jméno"
                        id="name"
                        name="name"
                        component={ReactstrapInput}
                        type="text"
                        placeholder="Jméno  (povinné pole)"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="5">
                    <FormGroup>
                      <Field
                        label="Příjmení"
                        id="surname"
                        name="surname"
                        component={ReactstrapInput}
                        type="text"
                        placeholder="Příjmení  "
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <FormGroup>
                      <Field
                        label="Věk"
                        id="age"
                        name="age"
                        type="text"
                        placeholder="Počet roků   (nepovinné pole)"
                        component={ReactstrapInput}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Field
                        label="Email"
                        component={ReactstrapInput}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Ve formátu honza@novak.cz     (povinné pole)"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Field
                        label="Telefonní číslo"
                        component={ReactstrapInput}
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        placeholder="Ve formátu 720123789      (nepovinné pole)"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4" sm="12">
                    <FormGroup>
                      <Label htmlFor="requester_address">Adresa</Label>
                      <LocationAutocomplete id="requester_address" onAddressSelect={setAddress} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Field
                        label="Předmět žádosti"
                        component={ReactstrapInput}
                        id="request_topic"
                        name="request_topic"
                        type="text"
                        placeholder="Např. Venčení psa   (povinné pole)"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup>
                      <Field
                        label="Popis žádosti"
                        component={ReactstrapInput}
                        id="request_description"
                        name="request_description"
                        type="textarea"
                        rows="4"
                        placeholder="Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a večer   (povinné pole)"
                      />
                    </FormGroup>
                  </Col>
                </Row>{" "}
                <Row>
                  <Col align="center">
                    <MaxWidthButton className="btn-lg btn-dark btn-block submit-button" type="submit">
                      Poslat žádost
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
