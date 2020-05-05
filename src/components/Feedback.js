import React from "react"
import {Form, Field, Formik} from "formik"
import * as Yup from "yup"
import { Button, FormGroup } from "reactstrap"
import axios from "axios"
import { baseUrl } from "../Url"

export default ({ errors, touched }) => {
  
  const validationSchema = Yup.object().shape({
    requester_email: Yup.string()
      .required("Email je povinný")
      .email("Neplatný email. Systém očekává formát honza.novak@seznam.cz")
      .max(100, "Email je příliš dlouhý"),
    feedback_topic: Yup.string()
      .required("Chybí předmět"),
    feedback_description: Yup.string()
      .max(1000, "Popis je příliš dlouhý")
      .required("Chybí popis"),
  });
  
  const initialValues = {
    requester_email: "",
    feedback_topic: "",
    feedback_description: "",
  };
  
  const onSubmit = (values) => {
    console.log("Request should be send with these values:", values);
    axios.get(baseUrl, {
      params: {
        api_name: "post_feedback",
        email: values.requester_email,
        topic: values.feedback_topic,
        content: values.feedback_description,
      },
    })
  };
  
  return (
    <div className="form-wrapper">
      <h2>Pomozte nám pomáhat</h2>
      <div style={{
        marginTop: 30,
        marginBottom: 30
      }}>
        
        <p>Něco Vám nefunguje tak jak má? Máte nápad na možné vylepšení této aplikace? Nebo máte jakoukoli jinou relevantní připomínku?</p>
        <p>Pokud jste odpověděl/a ANO na jakoukoli z výše položených otázek, tak prosím neváhejte a vyplňte formulář níže. Zabere Vám to 2 minuty.</p>
        <p>Vaše zpětné vazby bereme velice vážně a jsme za ně velice vděční.</p>
        <p>Děkujeme</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="askhelp-form">
            <FormGroup>
              <div className="input-label">
                <span>Email</span>
              </div>
              <div>
                <Field
                  name="requester_email"
                  type="text"
                  placeholder="Ve formatu např. honza.novak@seznam.cz"
                />
              </div>
              {errors.requester_email && touched.requester_email ? (
                <div className="validation-error">{errors.requester_email}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <div className="input-label">
                <span>Předmět</span>
              </div>
              <div>
                <Field
                  name="feedback_topic"
                  type="text"
                  placeholder="Např. Stížnost nebo Návrh na vylepšení"
                />
              </div>
              {errors.feedback_topic && touched.feedback_topic ? (
                <div className="validation-error">{errors.feedback_topic}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <div className="input-label">
                <span>Popis</span>
              </div>
              <div>
                <Field
                  id="feedback_description"
                  name="feedback_description"
                  type="text"
                  placeholder="Např. Nenačítá se mi mapa"
                />
              </div>
              {errors.feedback_description && touched.feedback_description ? (
                <div className="validation-error">{errors.feedback_description}</div>
              ) : null}
            </FormGroup>
            
            <Button
              className="btn-lg btn-dark btn-block submit-button"
              type="submit"
            >
              Poslat připomínku
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
