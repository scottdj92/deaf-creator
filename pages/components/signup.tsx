import React from "react";
import { Formik } from "formik";
import { SignupFormSchema } from "../models";
import SignupForm from "./signup-form";
import { object, string, boolean } from "yup";

class Signup extends React.Component {
    public render () {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    cityLocation: "",
                    stateLocation: "",
                    interest: "",
                }}
                validationSchema={object().shape({
                    name: string(),
                    email: string().email("A valid email must be inputted"),
                    cityLocation: string(),
                    stateLocation: string(),
                    interest: string(),
                })}
                onSubmit={(values) => this.onSubmit(values)}
                render={(props) => (
                    <SignupForm {...props}/>
                )}>
            </Formik>
        );
    }

    private onSubmit = (values: SignupFormSchema) => {
        console.log(values);
    }
}

export default Signup;
