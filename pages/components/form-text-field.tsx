import React from "react";
import { Control, Field, Label } from "bloomer";
import { FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import FormError from "./form-error";
import styled from "styled-components";

interface Props {
    label: string;
    placeholder: string;
}

const FormInput = styled("input")`
    border: 0;
    border-bottom: 5px solid white;
    color: white;
    font-size: 14px;
    background-color: transparent;
    width: 100%;
`;

const FormLabel = styled(Label)`
    color: white;
`;

type OwnProps = FieldProps<SignupFormSchema> & Props;
const FormTextField: React.SFC<OwnProps> = ({ field, form, label, placeholder }) => (
    <Field>
        <FormLabel>{label}</FormLabel>
        <Control color={
            form.touched[field.name]
            && form.errors[field.name]
            ? "warning"
            : ""
        }>
            <FormInput {...field} placeholder={placeholder}/>
        </Control>
        {
            form.touched[field.name]
            && form.errors[field.name]
            ? <FormError message={form.errors[field.name]}/>
            : null
        }
    </Field>
);

export default FormTextField;
