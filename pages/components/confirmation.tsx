import React from "react";
import styled from "styled-components";

const Wrapper = styled("section")`
    margin: 30px 0;
    color: white;
`;

const Message = styled("h1")`
    font-size: 18px;
`;

const Confirmation: React.SFC = () => (
    <Wrapper>
        <Message>Thank you for signing up for our mailing list!</Message>
        <Message>Be sure to stay on the lookout for more Deaf Creator news!</Message>
    </Wrapper>
);

export default Confirmation;
