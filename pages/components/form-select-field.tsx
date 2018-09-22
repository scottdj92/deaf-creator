import React, { HTMLAttributes } from "react";
import { Control, Field, Label } from "bloomer";
import { FieldProps, Field as FormikField } from "formik";
import { SignupFormSchema } from "../models";
import styled from "styled-components";
import FormError from "./form-error";

interface Props {
    label: string;
    isMultiple?: boolean;
    setField: (field: string, value: any, shouldValidate?: boolean) => void;
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

const FormInput = styled(FormikField)`
    border: 0;
    border-bottom: 1px solid white;
    color: white;
    font-size: 14px;
    background-color: transparent;
    width: 100%;
    margin-bottom: 15px;
`;

type OwnProps = FieldProps<SignupFormSchema> & Props & HTMLAttributes<HTMLDivElement>;
const FormSelectField: React.SFC<OwnProps> = ({ field, form, label, className, isMultiple, setField }) => (
    <Field className={className}>
        <FormLabel>{label}</FormLabel>
        <Control color={
            form.touched[field.name]
            && form.errors[field.name]
            ? "warning"
            : ""
        }>
            <FormInput {...field} component="select" multiple={isMultiple}
                onChange={(e) => {
                    setField(
                        field.name,
                        [].slice.call(e.target.selectedOptions)
                        .filter((option) => option.value !== "")
                        .map((option) => option.value),
                    );
                }}>
                <option disabled value="">-- Select an option --</option>
                <option value="Fine Arts">Fine Arts (De'VIA, Painting, Sculpture)</option>
                <option value="Design">Design (Graphic, Fashion, Industrial, Multimedia, Motion)</option>
                <option value="Photography/Film">Photography/Film (Filmmakers, Photographers)</option>
                <option value="Theater">Theater (Actors, Playwrights, Poets, ASL Poetry etc.)</option>
                <option value="Business">Business (Startups, Networking, Non-profit Organizations)</option>
                <option value="Technology">Technology (Developers, IT, etc.)</option>
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
