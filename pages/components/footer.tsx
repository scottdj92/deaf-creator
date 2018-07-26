import React from "react";
// see: https://github.com/jacobwgillespie/styled-icons/issues/162
import { ReactLogo } from "styled-icons/fa-brands/ReactLogo.cjs";
import { Heart } from "styled-icons/octicons/Heart.cjs";
import styled from "styled-components";

const Wrapper = styled.footer`
    text-align: center;
    background-color: transparent;
    padding: 15px;
    margin-top: 30px;
    color: white;
`;

const Footer: React.SFC = () => (
    <Wrapper>
        {`This site was made with `}
        <ReactLogo size={14}/>
        {` React, NextJS, TypeScript, and `}
        <Heart size={14}/>.
    </Wrapper>
);

export default Footer;
