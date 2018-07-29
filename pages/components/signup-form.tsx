import React from "react";
import { Control, Field as BloomerField } from "bloomer";
import { FormikProps, Field, Form } from "formik";
import { SignupFormSchema } from "../models";
import FormTextField from "./form-text-field";
import styled from "styled-components";
import FormSelectField from "./form-select-field";

const SubmitButton = styled("button")`
    border-radius: 15px;
    padding: 15px 30px;
    background-color: white;
    color: black;
    border: 0;
    font-size: 14px;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
        text-align: center;
    }
`;

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
    <>
        <Form>
            <Field name="name" render={(innerProps) => (
                <FormTextField {...innerProps}
                    label="Your Name"
                />
            )}>
            </Field>
            <Field name="email" render={(innerProps) => (
                <FormTextField {...innerProps}
                    label="Email Address"
                />
            )}>
            </Field>
            <Field name="location" render={(innerProps) => (
                <FormTextField {...innerProps}
                    label="Where are you from?"
                />
            )}/>
            <Field name="interest" render={(innerProps) => (
                <FormSelectField {...innerProps}
                    label="What type of art do you participate in or want to learn about?"
                />
            )}/>
            <BloomerField>
                <Control>
                    <SubmitButton type="submit" onClick={() => props.handleSubmit}>SUBMIT</SubmitButton>
                </Control>
            </BloomerField>
        </Form>
    </>
);

export default SignupForm;
