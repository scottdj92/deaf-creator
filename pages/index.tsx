import React from "react";
import styled from "styled-components";
import { Container, Box } from "bloomer";

const Title = styled.h1`
    color: cornflowerblue;
`;

const Index: React.SFC = () => (
    <Container>
        <Title>Hello world</Title>
    </Container>
);

export default Index;
