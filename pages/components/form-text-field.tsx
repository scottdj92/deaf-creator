import React from "react";
import { Control, Input, Field, Label } from "bloomer";
import { FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import FormError from "./form-error";

interface Props {
    label: string;
    placeholder: string;
}

type OwnProps = FieldProps<SignupFormSchema> & Props;
const FormTextField: React.SFC<OwnProps> = ({ field, form, label, placeholder }) => (
    <Field>
        <Label>{label}</Label>
        <Control color={
            form.touched[field.name]
            && form.errors[field.name]
            ? "warning"
            : ""
        }>
            <Input {...field} placeholder={placeholder}/>
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
