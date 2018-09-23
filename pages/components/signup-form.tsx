import React from "react";
import { Control, Field as BloomerField, Columns, Column } from "bloomer";
import { FormikProps, Field, Form } from "formik";
import { SignupFormSchema } from "../models";
import FormTextField from "./form-text-field";
import styled from "styled-components";
import FormSelectField from "./form-select-field";
const UsaStates = require("usa-states").UsaStates; // Lib didnt compile down to commonjs
import Loader from "./loader";

const SubmitButton = styled("button")`
    border-radius: 20px;
    padding: 5px 30px;
    background-color: white;
    color: black;
    border: 0;
    font-size: 14px;
    line-height: 20pt;
    margin-top: 10px;
    font-weight: bold;

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

const StateLocationField = styled(FormSelectField)`
    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 12px;
    }
`;

const StateLocationColumn = styled(Column)`
    @media screen and (min-width: 768px) {
        position: relative;
    };
`;

const States = new UsaStates();

const SignupForm: React.SFC<FormikProps<SignupFormSchema>> = (props) => (
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
        <Columns>
            <Column isSize={{ mobile: 12, tablet: 6 }}>
                <Field name="cityLocation" render={(innerProps) => (
                    <FormTextField {...innerProps}
                        label="Where are you from?"
                        placeholder="City"
                    />
                )}>
                </Field>
            </Column>
            <StateLocationColumn isSize={{ mobile: 12, tablet: 6 }}>
                <Field name="stateLocation" render={(innerProps) => (
                    <StateLocationField {...innerProps} setField={props.setFieldValue}>
                        <option disabled value="">State</option>
                        <option value="International">International</option>
                        {
                            States.states.map( ({ abbreviation, name }) =>
                                <option key={abbreviation} value={abbreviation}>{name}</option>)
                        }
                    </StateLocationField>
                )}/>
            </StateLocationColumn>
        </Columns>
        <Field name="interest" render={(innerProps) => (
            <FormSelectField {...innerProps} isMultiple setField={props.setFieldValue}
                label="What types of topics are you involved in or want to learn more about?">
                <option disabled value="">-- Select an option --</option>
                <option value="Fine Arts">Fine Arts (De'VIA, Painting, Sculpture)</option>
                <option value="Design">Design (Graphic, Fashion, Industrial, Multimedia, Motion)</option>
                <option value="Photography/Film">Photography/Film (Filmmakers, Photographers)</option>
                <option value="Theater">Theater (Actors, Playwrights, Poets, ASL Poetry etc.)</option>
                <option value="Business">Business (Startups, Networking, Non-profit Organizations)</option>
                <option value="Technology">Technology (Developers, IT, etc.)</option>
            </FormSelectField>
        )}/>
        <BloomerField>
            <Control>
                <SubmitButton type="submit" onClick={() => props.handleSubmit}>
                    {props.isSubmitting ? <Loader/> : null} SUBMIT
                </SubmitButton>
            </Control>
        </BloomerField>
    </Form>
);

export default SignupForm;
