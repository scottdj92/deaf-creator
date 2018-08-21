import React, { HTMLAttributes } from "react";
import { Control, Field, Label } from "bloomer";
import { FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import styled from "styled-components";
import FormError from "./form-error";

interface Props {
    label: string;
    isMultiple?: boolean;
}

const FormLabel = styled(Label)`
    color: white;
    font-size: 14px;
    line-height: 20pt;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        margin-bottom: inherit;
    };
`;

const FormInput = styled("select")`
    border: 0;
    border-bottom: 1px solid white;
    color: white;
    font-size: 14px;
    background-color: transparent;
    width: 100%;
    margin-bottom: 15px;
`;

type OwnProps = FieldProps<SignupFormSchema> & Props & HTMLAttributes<HTMLDivElement>;
const FormSelectField: React.SFC<OwnProps> = ({ field, form, label, children, className, isMultiple }) => (
    <Field className={className}>
        <FormLabel>{label}</FormLabel>
        <Control color={
            form.touched[field.name]
            && form.errors[field.name]
            ? "warning"
            : ""
        }>
            <FormInput {...field} multiple={ isMultiple }>
                {children}
            </FormInput>
        </Control>
        {
            form.touched[field.name]
            && form.errors[field.name]
            ? <FormError message={form.errors[field.name]}/>
            : null
        }
    </Field>
);

export default FormSelectField;
