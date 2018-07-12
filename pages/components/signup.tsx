import React from "react";
import { Formik } from "formik";
import { SignupFormSchema } from "../models";
import SignupForm from "./signup-form";

class Signup extends React.Component {
    public render () {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    optInNewsletter: false,
                }}
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
