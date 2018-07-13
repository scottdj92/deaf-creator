import React from "react";
import { Control, Input, Field as BloomerField, Label, Button, Checkbox } from "bloomer";
import { FormikProps, Field, Form, FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import FormTextField from "./form-text-field";

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <Form>
        <Field name="name" render={(innerProps) => (
            <FormTextField {...innerProps}
                label="Your Name"
                placeholder="Full Name"
            />
        )}>
        </Field>
        <Field name="email" render={(innerProps) => (
            <FormTextField {...innerProps}
                label="Email Address"
                placeholder="Email Address"
            />
        )}>
        </Field>
        <Field name="optInNewsletter" render={({ field, form }: FieldProps<SignupFormSchema>) => (
            <BloomerField>
                <Control>
                    <Checkbox {...field}> Yes, sign me up for the newsletter!</Checkbox>
                </Control>
            </BloomerField>
        )}/>
        <BloomerField isGrouped>
            <Control>
                <Button isColor="primary" type="submit" onClick={() => props.handleSubmit}>Submit</Button>
            </Control>
        </BloomerField>
    </Form>
);

export default SignupForm;
