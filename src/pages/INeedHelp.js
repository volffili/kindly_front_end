import React, { useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { baseUrl } from "../Url"
import { Button, FormGroup, Label } from "reactstrap"
import LocationAutocomplete from "../components/LocationAutocomplete"
import Instructions from "../components/Instructions"
import { ReactstrapInput } from "reactstrap-formik"

export default () => {
  const [address, setAddress] = useState({})

  const handleAddressChange = (address_event) => {
    setAddress(address_event)
    console.log("setting: ", address_event)
  }

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
    <div>
      <Instructions
        header="Čím Vám ostatní mohou pomoci?"
        textRows={["Lorem ipsumdsfsdfsaf", "sadmfosdanfsdofnsdfn"]}
      />
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {() => (
            <Form className="askhelp-form">
              <FormGroup>
                <Label htmlFor="name">Jméno</Label>
                <Field
                  id="name"
                  name="name"
                  component={ReactstrapInput}
                  type="text"
                  placeholder="Křestní jméno a příjmení  (povinné pole)"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="age">Věk</Label>
                <Field
                  id="age"
                  name="age"
                  type="text"
                  placeholder="Počet roků   (nepovinné pole)"
                  component={ReactstrapInput}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Field
                  component={ReactstrapInput}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Ve formátu honza@novak.cz     (nepovinné pole)"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone_number">Telefonní číslo</Label>
                <Field
                  component={ReactstrapInput}
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  placeholder="Ve formátu 720123789      (povinné pole)"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="requester_address">Adresa</Label>
                <LocationAutocomplete id="requester_address" onAddressSelect={handleAddressChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="request_topic">Předmět žádosti</Label>
                <Field
                  component={ReactstrapInput}
                  id="request_topic"
                  name="request_topic"
                  type="text"
                  placeholder="Např. Venčení psa   (povinné pole)"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="request_description">Popis žádosti</Label>
                <Field
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
      </div>
    </div>
  )
}
