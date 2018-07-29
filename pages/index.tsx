import React from "react";
import { Container, Columns, Column } from "bloomer";
import Signup from "./components/signup";
import Footer from "./components/footer";
import SocialMedia from "./components/social-media";
import Hook from "./components/hook";
import Credits from "./components/credit";
import styled from "styled-components";

const Wrapper = styled(Container)`
    height: 100%;

    @media screen and (max-width: 576px) {
        padding: 0 15px;
    }
`;

const HeaderImage = styled.img`
    margin: 30px 0;
`;

const Index: React.SFC = () => (
    <Wrapper>
        <HeaderImage src="/static/images/logo_deafCreator.png"/>
        <Columns>
            <Column isSize="1/3">
                <Hook/>
                <SocialMedia/>
                <Signup/>
            </Column>
        </Columns>
        <Columns>
            <Column isSize="1/3" isOffset="2/3">
                <Credits/>
            </Column>
        </Columns>
        <Footer/>
    </Wrapper>
);

export default Index;
