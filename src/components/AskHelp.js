import React, {useState} from 'react';
import {withFormik, Form, Field, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {baseUrl} from '../Url';
import {Button, Label, FormGroup} from 'reactstrap';
import LocationInput from "./LocationAutocomplete";
import  "./style.css";

const AskHelp = ({
    errors,
    touched
}) =>{

    const [address, setAddress] = useState({});

    const handleAddressChange = address_event => {
        setAddress(address_event);
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            phone_number: '',
            request_topic: '',
            request_description: ''
        },
        onSubmit: values => {
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
            console.log('Query Params = ', query_params)

            axios.get(baseUrl,{
                params: query_params
            })

        },
    });


    return (
        <div className='form-wrapper'>
            <Form className="askhelp-form" onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <div className="input-label">
                        <span >Jméno</span>
                    </div>
                    <div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Křestní jméno a příjmení"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Věk</span>
                    </div>
                    <div>
                        <input
                            id="age"
                            name="age"
                            type="text"
                            placeholder="Počet roků"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Telefonní číslo</span>
                    </div>
                    <div>
                        <input
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            placeholder="Ve formátu 720123789"
                            onChange={formik.handleChange}
                            value={formik.values.phone_number}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Adresa</span>
                    </div>
                    <LocationInput onAddressSelect={handleAddressChange}/>
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Předmět žádosti</span>
                    </div>
                    <div>
                        <input
                            id="request_topic"
                            name="request_topic"
                            type="text"
                            placeholder="Např. Venčení psa"
                            onChange={formik.handleChange}
                            value={formik.values.request_topic}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="input-label">
                        <span >Popis žádosti</span>
                    </div>
                    <div>
                        <input
                            id="request_description"
                            name="request_description"
                            type="text"
                            placeholder="Např. Mám 2 psy typu čivava které je potřeba venčit 2-krát denně, ráno a večer"
                            onChange={formik.handleChange}
                            value={formik.values.request_description}
                        />
                    </div>
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block submit-button"  type="submit">Poslat žádost</Button>
            </Form>
        </div>
    );



};

export default withFormik({
})(AskHelp)
