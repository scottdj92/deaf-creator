import React from "react";
import { Container, Title } from "bloomer";
import Signup from "./components/signup";

const Index: React.SFC = () => (
    <Container>
        <Title>Welcome to the Deaf Creators Conference</Title>
        <Signup/>
    </Container>
);

export default Index;
