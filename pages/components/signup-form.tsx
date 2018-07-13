import React from "react";
import { Control, Input, Field as BloomerField, Label, Button, Checkbox } from "bloomer";
import { FormikProps, Field, Form, FieldProps } from "formik";
import { SignupFormSchema } from "../models";

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <Form>
        <Field name="name" render={({field, form}: FieldProps<SignupFormSchema>) => (
            <BloomerField>
                <Label>Your Name</Label>
                <Control>
                    <Input {...field} placeholder="Full Name"/>
                </Control>
            </BloomerField>
        )}>
        </Field>
        <Field name="email" render={({ field, form }: FieldProps<SignupFormSchema>) => (
            <BloomerField>
                <Label>Email Address</Label>
                <Control>
                    <Input {...field} placeholder="Email Address"/>
                </Control>
            </BloomerField>
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
