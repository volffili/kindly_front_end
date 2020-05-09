import React, { useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { baseUrl } from "../Url"
import { Button, FormGroup, Label, Container } from "reactstrap"
import LocationAutocomplete from "../components/LocationAutocomplete"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"

export default () => {
  const [address, setAddress] = useState({})

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Jméno je povinné pole"),
    age: Yup.number().typeError("Věk musí být číslo"),
    email: Yup.string().email("Neplatný email. Systém očekává formát honza.novak@seznam.cz"),
    phone_number: Yup.string().required("Telefonní číslo je povinné pole"),
    request_topic: Yup.string().required("Předmět je povinné pole"),
    request_description: Yup.string().required("Popis žádosti je povinné pole"),
  })

  const initialValues = {
    name: "",
    age: "",
    phone_number: "",
    email: "",
    request_topic: "",
    request_description: "",
  }

  const onSubmit = (values) => {
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
      <h1>Čím Vám ostatní mohou pomoci?</h1>
      <h2>Lorem ipsumdsfsdfsaf</h2>
      <h2>sadmfosdanfsdofnsdfn</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form className="askhelp-form">
            <FormGroup>
              <Field
                label="Jméno"
                id="name"
                name="name"
                component={ReactstrapInput}
                type="text"
                placeholder="Křestní jméno a příjmení  (povinné pole)"
              />
            </FormGroup>
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
            <FormGroup>
              <Field
                label="Email"
                component={ReactstrapInput}
                id="email"
                name="email"
                type="text"
                placeholder="Ve formátu honza@novak.cz     (nepovinné pole)"
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="Telefonní číslo"
                component={ReactstrapInput}
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder="Ve formátu 720123789      (povinné pole)"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="requester_address">Adresa</Label>
              <LocationAutocomplete id="requester_address" onAddressSelect={setAddress} />
            </FormGroup>
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
            <FormGroup>
              <Field
                label="Popis žádosti"
                component={ReactstrapInput}
                id="request_description"
                name="request_description"
                type="text"
                placeholder="Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a večer   (povinné pole)"
              />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block submit-button" type="submit">
              Poslat žádost
            </Button>
          </Form>
        )}
      </Formik>
    </PageWrap>
  )
}
