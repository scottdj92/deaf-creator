import React, { InputHTMLAttributes } from "react";
import { Field, FormikProps, FieldProps } from "formik";
import { Label, Input, Control } from "bloomer";
import { SignupFormSchema } from "../models";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
    label: string;
}

const FormField: React.SFC<FieldProps<SignupFormSchema> & Props> = (props) => (
    <>
        <Label>{props.label}</Label>
        <Control>
            <Field name={props.name} render={(innerProps) => (
                    <Input {...innerProps.field}
                        {...innerProps}
                        placeholder={props.placeholder}
                        // color={props.form.errors[props.field.name] ? "" : "warning"}
                    />
                )}/>
        </Control>
    </>
);

export default FormField;
