import React from "react"
import { Form, Field, Formik } from "formik"
import * as Yup from "yup"
import { Button, FormGroup, Label, Container } from "reactstrap"
import axios from "axios"
import { baseUrl } from "../Url"
import { ReactstrapInput } from "reactstrap-formik"
import PageWrap from "../components/PageWrap"

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
      <h1>Pomozte nám pomáhat</h1>
      <h2>
        Něco Vám nefunguje tak jak má? Máte nápad na možné vylepšení této aplikace? Nebo máte jakoukoli jinou relevantní
        připomínku? Pokud jste odpověděl/a ANO na jakoukoli z výše položených otázek, tak prosím neváhejte a vyplňte
        formulář níže. Zabere Vám to 2 minuty. Vaše zpětné vazby bereme velice vážně a jsme za ně velice vděční.
      </h2>
      <h2>Děkujeme</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            <FormGroup>
              <Field
                label="Email"
                name="requester_email"
                type="text"
                placeholder="Ve formatu např. honza.novak@seznam.cz"
                component={ReactstrapInput}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="předmět"
                name="feedback_topic"
                type="text"
                placeholder="Např. Stížnost nebo Návrh na vylepšení"
                component={ReactstrapInput}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="Popis"
                id="feedback_description"
                name="feedback_description"
                type="text"
                placeholder="Např. Nenačítá se mi mapa"
                component={ReactstrapInput}
              />
            </FormGroup>

            <Button className="btn-lg btn-dark btn-block submit-button" type="submit">
              Poslat připomínku
            </Button>
          </Form>
        )}
      </Formik>
    </PageWrap>
  )
}
