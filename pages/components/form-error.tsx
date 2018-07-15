import React from "react";
import styled from "styled-components";

const Message = styled.span`
    color: #ff3860;
    margin: 15px 0;
`;

interface Props {
    message: string;
}

const FormError: React.SFC<Props> = ({ message }) => (
    <Message>{message}</Message>
);

export default FormError;
