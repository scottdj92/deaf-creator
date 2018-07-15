import React from "react";
import { Container, Columns } from "bloomer";
import Signup from "./components/signup";
import Footer from "./components/footer";
import Header from "./components/header";
import SideImage from "./components/side-image";
import Hook from "./components/hook";

const Index: React.SFC = () => (
    <Container>
        <Header src="/static/images/dc-logo.png"/>
        <Columns isCentered>
            <Hook/>
        </Columns>
        <Columns isVCentered>
            <SideImage/>
            <Signup/>
        </Columns>
        <Footer/>
    </Container>
);

export default Index;
