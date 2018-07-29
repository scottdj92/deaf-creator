import React from "react";
import { Control, Field, Label } from "bloomer";
import { FieldProps } from "formik";
import { SignupFormSchema } from "../models";
import styled from "styled-components";
import FormError from "./form-error";

interface Props {
    label: string;
}

const FormLabel = styled(Label)`
    color: white;
`;

const FormInput = styled("select")`
    border: 0;
    border-bottom: 3px solid white;
    color: white;
    font-size: 14px;
    background-color: transparent;
    width: 100%;
`;

type OwnProps = FieldProps<SignupFormSchema> & Props;
const FormSelectField: React.SFC<OwnProps> = ({ field, form, label }) => (
    <Field>
        <FormLabel>{label}</FormLabel>
        <Control color={
            form.touched[field.name]
            && form.errors[field.name]
            ? "warning"
            : ""
        }>
            <FormInput {...field}>
                <option disabled selected value="">-- Select an option --</option>
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
