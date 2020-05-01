import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {baseUrl} from '../Url';
import {Button, Label, FormGroup} from 'reactstrap';
import LocationInput from "./LocationAutocomplete";
import  "./style.css";

export default () =>{

    const [address, setAddress] = useState({});

    const handleAddressChange = address_event => {
        setAddress(address_event);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Jméno je povinné pole"),
        age: Yup.number().typeError("Věk musí být číslo").required("Věk je povinné pole"),
        phone_number: Yup.string().required("Telefonní číslo je povinné pole"),
        request_topic: Yup.string().required("Předmět je povinné pole"),
        request_description: Yup.string().required("Popis žádosti je povinné pole")
    });


    const initialValues = {
        name: '',
        age: '',
        phone_number: '',
        request_topic: '',
        request_description: ''
    } ;

    const onSubmit = values => {
        let query_params = {
            api_name: "post_help_request",
            requester_name: values.name,
            requester_age: values.age,
            requester_phone_number: values.phone_number,
            requester_address: address.formatted_address,
            requester_address_lat: address.lat,
            requester_address_lng: address.lng,
            request_topic: values.request_topic,
            request_details: values.request_description
        };
        console.log('Query Params = ', query_params);

        axios.get(baseUrl,{
            params: query_params
        })

    };



    return (
        <div className='form-wrapper'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) =>
                    (
                <Form className="askhelp-form">
                <FormGroup>
                    <div className="input-label">
                        <span >Jméno</span>
                    </div>
                    <div>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Křestní jméno a příjmení"
                        />
                    </div>
                    {errors.name && touched.name ? (
                        <div className="validation-error">{errors.name}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Věk</span>
                    </div>
                    <div>
                        <Field
                            id="age"
                            name="age"
                            type="text"
                            placeholder="Počet roků"
                        />
                    </div>
                    {errors.age && touched.age ? (
                        <div className="validation-error">{errors.age}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Telefonní číslo</span>
                    </div>
                    <div>
                        <Field
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            placeholder="Ve formátu 720123789"
                        />
                    </div>
                    {errors.phone_number && touched.phone_number ? (
                        <div className="validation-error">{errors.phone_number}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Adresa</span>
                    </div>
                    <LocationInput onAddressSelect={handleAddressChange}/>
                    {address ? null : <div className="validation-error">Adresa je povinné pole</div>}
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Předmět žádosti</span>
                    </div>
                    <div>
                        <Field
                            id="request_topic"
                            name="request_topic"
                            type="text"
                            placeholder="Např. Venčení psa"
                        />
                    </div>
                    {errors.request_topic && touched.request_topic ? (
                        <div className="validation-error">{errors.request_topic}</div>
                    ) : null}
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Popis žádosti</span>
                    </div>
                    <div>
                        <Field
                            id="request_description"
                            name="request_description"
                            type="text"
                            placeholder="Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a večer"
                        />
                    </div>
                    {errors.request_description && touched.request_description ? (
                        <div className="validation-error">{errors.request_description}</div>
                    ) : null}
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block submit-button" type="submit">Poslat žádost</Button>
            </Form>)}
            </Formik>
        </div>
    );



};
