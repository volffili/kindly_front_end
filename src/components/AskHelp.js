import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {baseUrl} from '../Url';
import {Button, Label, FormGroup} from 'reactstrap';
import { ReactstrapInput } from "reactstrap-formik";
import LocationInput from "./LocationAutocomplete";
import  "./style.css";

const AskHelp = ({
    errors,
    touched
}) =>{
    return<div className='form-wrapper'>
        <Form className="askhelp-form">
            <FormGroup>
                <Label>Jméno</Label>
                <Field component={ReactstrapInput} type="text" name="name" placeholder="Křestní jméno a příjmení"/>
            </FormGroup>
            <FormGroup>
                <Label>Věk</Label>
                <Field component={ReactstrapInput} type="text" name="age" placeholder="Počet roků"/>
            </FormGroup>
            <FormGroup>
                <Label>Telefonní číslo</Label>
                <Field component={ReactstrapInput} type="text" name="phone" placeholder="Ve formátu 123456789"/>
            </FormGroup>
            <FormGroup>
                <Label>Adresa</Label>
                <Field component={LocationInput} type="text" name="address" placeholder="Začněte psát jmeno ulice, my za Vás doplníme zbytek"/>
            </FormGroup>
            <FormGroup>
                <Label>Předmět žádosti</Label>
                <Field component={ReactstrapInput} type="text" name="topic" placeholder="Např. Venčení psa"/>
            </FormGroup>
            <FormGroup>
                <Label>Popis žádosti</Label>
                <Field component={ReactstrapInput} type="textarea" rows="3" name="description" placeholder="Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a večer"/>
            </FormGroup>

            <Button className="btn-lg btn-dark btn-block">Submit</Button>
        </Form>
    </div>
};

export default withFormik({
    validationSchema: Yup.object().shape({
        // name: Yup.string().matches(/.+\s.+/).required(),
        // age: Yup.number().min(6).max(200).required(),
        // phone: Yup.string().required(),
        // address: Yup.string().required(),
        // topic: Yup.string().required(),
        // description: Yup.string().min(50).required()
    }),
    handleSubmit(values){    
        console.log(values)
        axios.get(baseUrl,{ 
            params: { 
                api_name: "post_help_request",
                requester_name: values.name,
                requester_age: values.age,
                requester_phone_number: values.phone,
                requester_address: values.address,
                request_topic: values.topic,
                request_details: values.description
            }
        })
    }
})(AskHelp)
