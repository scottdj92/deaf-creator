import React from "react";
import styled from "styled-components";
import { ArtistContext } from "./background";

interface WrapperProps {
    isInverse: boolean;
}

const Wrapper = styled.div`
    text-align: right;
    color: ${(props: WrapperProps) => props.isInverse ? "black" : "white"};
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: color ease-in-out 0.2s;

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

const ArtistLink = styled.a`
    font-weight: bold;
    text-decoration: underline;
    color: inherit;
`;

const Credit: React.SFC = () => (
    <ArtistContext.Consumer>
        {({websiteUrl, fullName, isInverse}) => (
            <Wrapper isInverse={isInverse}>
                <p>Photograph by <ArtistLink href={websiteUrl} target="_blank">
                    {fullName}
                    </ArtistLink>
                </p>
            </Wrapper>
        )}
    </ArtistContext.Consumer>
);

export default Credit;
