import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import { Button, Label, FormGroup } from "reactstrap"
import { ReactstrapInput } from "reactstrap-formik"
import axios from "axios"
import { baseUrl } from "../Url"

const Feedback = ({ errors, touched }) => {
  return (
    <Form className="askhelp-form">
      <FormGroup>
        <Label>Email</Label>
        <Field
          component={ReactstrapInput}
          type="text"
          name="email"
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup>
        <Label>Předmět</Label>
        <Field
          component={ReactstrapInput}
          type="text"
          name="predmet"
          placeholder="Předmět"
        />
      </FormGroup>
      <FormGroup>
        <Label>Popis</Label>
        <Field
          component={ReactstrapInput}
          type="textarea"
          rows="5"
          name="popis"
          placeholder="Popis"
        />
      </FormGroup>

      <Button className="btn-lg btn-dark btn-block">Submit</Button>
    </Form>
  )
}

export default withFormik({
  validationSchema: Yup.object().shape({
    predmet: Yup.string()
      .required("Chybí předmět")
      .max(100, "Předmět je příliš dlouhý"),
    email: Yup.string()
      .required("Email je povinný")
      .email("Neplatný email")
      .max(100, "Email je příliš dlouhý"),
    popis: Yup.string()
      .min(50, "Popis je příliš krátký")
      .max(1000, "Popis je příliš dlouhý")
      .required("Chybí popis"),
  }),
  handleSubmit(values) {
    console.log("Request should be send with these values:", values)
    axios.get(baseUrl, {
      params: {
        api_name: "post_feedback",
        email: values.email,
        topic: values.predmet,
        content: values.popis,
      },
    })
  },
})(Feedback)
