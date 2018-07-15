import React from "react";
import { Control, Field as BloomerField, Button, Checkbox, Columns, Column } from "bloomer";
import { FormikProps, Field, Form, FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import FormTextField from "./form-text-field";

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <Columns isCentered>
        <Column isSize="1/3">
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
                    <Control>
                        <Button className="is-text" onClick={props.handleReset}>Cancel</Button>
                    </Control>
                </BloomerField>
            </Form>
        </Column>
    </Columns>
);

export default SignupForm;
