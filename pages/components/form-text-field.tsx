import React from "react";
import { Control, Input, Field, Label, Notification } from "bloomer";
import { FieldProps } from "formik";
import { SignupFormSchema } from "../models";

interface Props {
    label: string;
    placeholder: string;
}

type OwnProps = FieldProps<SignupFormSchema> & Props;
const FormTextField: React.SFC<OwnProps> = ({ field, form, label, placeholder }) => (
    <Field>
        <Label>{placeholder}</Label>
        <Control>
            <Input {...field} placeholder={placeholder}/>
        </Control>
        {
            form.touched[field.name]
            && form.errors[field.name]
            ? <Notification>{form.errors[field.name]}</Notification>
            : null
        }
    </Field>
);

export default FormTextField;
