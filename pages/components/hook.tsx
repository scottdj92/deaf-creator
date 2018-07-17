import React from "react";
import styled from "styled-components";
import { Title, Column } from "bloomer";

const Wrapper = styled(Column)`
    padding: 30px;
    text-align: center;
`;

const Hook: React.SFC = () => (
    <Wrapper isSize="1/2">
        <Title>We are excited to announce:</Title>
        <img src="/static/images/dcc-black-icon.png"/>
    </Wrapper>
);

export default Hook;
