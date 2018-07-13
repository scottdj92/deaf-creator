import React from "react";
import { Container, Title } from "bloomer";
import Signup from "./components/signup";
import Footer from "./components/footer";

const Index: React.SFC = () => (
    <Container>
        <Title>Welcome to the Deaf Creators Conference</Title>
        <Signup/>
        <Footer/>
    </Container>
);

export default Index;
