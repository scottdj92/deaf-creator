import React from "react";
import { Formik } from "formik";
import { SignupFormSchema } from "../models";
import SignupForm from "./signup-form";
import { object, string, boolean, array } from "yup";
import axios from "axios";
import Confirmation from "./confirmation";

interface State {
    confirmed: boolean;
}

class Signup extends React.Component<{}, State> {
    public state = { confirmed: false };
    public render () {
        if (this.state.confirmed) {
            return <Confirmation/>;
        }

        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    cityLocation: "",
                    stateLocation: "",
                    interest: [""],
                }}
                validationSchema={object().shape({
                    name: string().required("Your name is required"),
                    email: string().email("A valid email must be inputted").required("Your email address is required"),
                    cityLocation: string(),
                    stateLocation: string(),
                    interest: array().of(string()),
                })}
                onSubmit={(values) => console.log(values)}

                render={(props) => (
                    <SignupForm {...props}/>
                )}>
            </Formik>
        );
    }

    private onSubmit = (values: SignupFormSchema) => {
        axios.get(process.env.SIGNUP_URL,
        {
            params: {
                name: values.name,
                email: values.email,
                cityLocation: values.cityLocation,
                stateLocation: values.stateLocation,
                interest: values.interest,
            },
        }).then((result) => this.setState({confirmed: true}));
    }
}

export default Signup;
