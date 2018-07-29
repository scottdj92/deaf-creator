import React from "react";
import styled from "styled-components";
import { ArtistContext } from "./background";

const Wrapper = styled.div`
    text-align: right;
    color: white;
`;

const ArtistLink = styled.a`
    font-weight: bold;
    text-decoration: underline;
    color: white;
`;

const Credit: React.SFC = () => (
    <ArtistContext.Consumer>
        {({websiteUrl, fullName}) => (
            <Wrapper>
                <p>Photograph by <ArtistLink href={websiteUrl} target="_blank">
                    {fullName}
                    </ArtistLink>
                </p>
            </Wrapper>
        )}
    </ArtistContext.Consumer>
);

export default Credit;
