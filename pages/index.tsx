import React from "react";
import { Container, Columns, Column } from "bloomer";
import Signup from "./components/signup";
import SocialMedia from "./components/social-media";
import Hook from "./components/hook";
import Credit from "./components/credit";
import styled from "styled-components";
import { transparentize } from "polished";

const Wrapper = styled(Container)`
    height: 100%;

    @media screen and (max-width: 576px) {
        padding: 0 15px;
    }
`;

const HeaderImage = styled.img`
    margin: 30px 0;
`;

const BlackWrapper = styled(Column)`
    background-color: ${transparentize(0.2, "black")};
`;

const Index: React.SFC = () => (
    <Wrapper isFluid>
        <Columns>
            <BlackWrapper isSize={4}>
                <HeaderImage src="/static/images/logo_deafCreator.png"/>
            </BlackWrapper>
        </Columns>
        <Columns>
            <BlackWrapper isSize={4} style={{marginBottom: "-15px", paddingRight: "5%"}}>
                <Hook/>
                <SocialMedia/>
                <Signup/>
            </BlackWrapper>
        </Columns>
        <Credit/>
    </Wrapper>
);

export default Index;
