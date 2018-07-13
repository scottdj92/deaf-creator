import React from "react";
// see: https://github.com/jacobwgillespie/styled-icons/issues/162
import { ReactLogo } from "styled-icons/fa-brands/ReactLogo.cjs";
import { Heart } from "styled-icons/octicons/Heart.cjs";
import styled from "styled-components";

const Wrapper = styled.footer`
    text-align: center;
    background-color: papayawhip;
    padding: 15px;
`;

const Footer: React.SFC = () => (
    <Wrapper>
        {`Made with `}
        <ReactLogo size={14}/>
        {` React, NextJS, TypeScript, and `}
        <Heart size={14}/>.
    </Wrapper>
);

export default Footer;
