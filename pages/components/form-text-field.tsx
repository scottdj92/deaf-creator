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
    border-bottom: 1px solid white;
    color: white;
    font-size: 14px;
    background-color: transparent;
    width: 100%;
    margin-bottom: 15px;

    &:placeholder-shown {
        color: white;
    }
    &::-moz-placeholder {
        opacity: 1;
    }
`;

const FormLabel = styled(Label)`
    color: white;
    font-size: 14px;
    line-height: 20pt;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        margin-bottom: inherit;
    };
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
