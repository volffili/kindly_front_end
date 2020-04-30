import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {baseUrl} from '../Url';
import {Button, Label, FormGroup} from 'reactstrap';
import { ReactstrapInput } from "reactstrap-formik";
import LocationInput from "./LocationAutocomplete";
import styles from "./style.module.css";

const AskHelp = ({
    errors,
    touched
}) =>{
    return<div className={styles.formWrapper}>
        <Form className="askhelp-form">
            <FormGroup>
                <Label>Name</Label>
                <Field component={ReactstrapInput} type="text" name="name" placeholder="First and Last Name"/>
            </FormGroup>
            <FormGroup>
                <Label>Age</Label>
                <Field component={ReactstrapInput} type="text" name="age" placeholder="Age"/>
            </FormGroup>
            <FormGroup>
                <Label>Phone</Label>
                <Field component={ReactstrapInput} type="text" name="phone" placeholder="Phone Number"/>
            </FormGroup>
            <FormGroup>
                <Label>Address</Label>
                <Field component={ReactstrapInput} type="text" name="address" placeholder="Address"/>
            </FormGroup>
            <FormGroup>
                <Label>Topic</Label>
                <Field component={ReactstrapInput} type="text" name="topic" placeholder="Topic"/>
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Field component={ReactstrapInput} type="textarea" rows="3" name="description" placeholder="Description"/>
            </FormGroup>

            <LocationInput/>

            <Button className="btn-lg btn-dark btn-block">Submit</Button>
        </Form>
    </div>
};

export default withFormik({
    validationSchema: Yup.object().shape({
        name: Yup.string().matches(/.+\s.+/).required(),
        age: Yup.number().min(6).max(200).required(),
        phone: Yup.string().required(),
        address: Yup.string().required(),
        topic: Yup.string().required(),
        description: Yup.string().min(50).required()
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
