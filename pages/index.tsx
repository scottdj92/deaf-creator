import React from "react";
import { Container, Columns, Column } from "bloomer";
import Signup from "./components/signup";
import Footer from "./components/footer";
import Header from "./components/header";
import SocialMedia from "./components/social-media";
import Hook from "./components/hook";
import styled from "styled-components";

const Wrapper = styled(Container)`
    background-color: black;
`;

const Index: React.SFC = () => (
    <Wrapper>
        <Header src="/static/images/dc-logo.png"/>
        <Columns>
            <Column isSize="1/3">
                <Hook/>
                <SocialMedia/>
                <Signup/>
            </Column>
        </Columns>
        <Footer/>
    </Wrapper>
);

export default Index;
