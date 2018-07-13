import React from "react";
import { Control, Input, Field, Label, Button, Checkbox } from "bloomer";
import { FormikProps } from "formik";
import { SignupFormSchema } from "../models";
import FormField from "./form-field";

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field>
            <FormField label="Your Name"
                name="name"
                placeholder="Your Name"
            />
        </Field>
        <Field>
            <FormField label="Email"
                name="email"
                placeholder="Email Address"
            />
        </Field>
        {/* <Field>
            <Control>
                <Checkbox onChange={props.handleChange}
                    name="optInNewsletter"> Yes, add me to the mailing list!</Checkbox>
            </Control>
        </Field> */}
        <Field isGrouped>
            <Control>
                <Button isColor="primary" type="submit" onClick={() => props.handleSubmit}>Submit</Button>
            </Control>
        </Field>
    </form>
);

export default SignupForm;
