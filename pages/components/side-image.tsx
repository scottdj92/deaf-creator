import React from "react";
import { Column } from "bloomer";
import styled from "styled-components";

const ListImage = styled.img`
    width: 60%;
`;

const SideImage: React.SFC = () => (
    <Column isSize="1/2">
        <ListImage src="/static/images/dc-list.png"/>
    </Column>
);

export default SideImage;
