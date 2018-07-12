import React from "react";
import { Control, Input, Field, Label, Button, Checkbox } from "bloomer";
import { FormikProps } from "formik";
import { SignupFormSchema } from "../models";

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field>
            <Label>Your Name</Label>
            <Control>
                <Input type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={props.handleChange}/>
            </Control>
        </Field>
        <Field>
            <Label>Your Email</Label>
            <Control>
                <Input type="text"
                    placeholder="Email Address"
                    name="email"
                    onChange={props.handleChange}/>
            </Control>
        </Field>
        <Field>
            <Control>
                <Checkbox checked={props.values.optInNewsletter}
                    onChange={props.handleChange}
                    name="optInNewsletter"> Yes, add me to the mailing list!</Checkbox>
            </Control>
        </Field>
        <Field isGrouped>
            <Control>
                <Button isColor="primary" type="submit">Submit</Button>
            </Control>
        </Field>
    </form>
);

export default SignupForm;
