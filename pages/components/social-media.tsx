import React from "react";
import { FacebookF } from "styled-icons/fa-brands/FacebookF.cjs";
import { Instagram } from "styled-icons/fa-brands/Instagram.cjs";
import { Twitter } from "styled-icons/fa-brands/Twitter.cjs";
import styled from "styled-components";

const Facebook = styled(FacebookF)`
    margin-right: 10px;
    color: white;

    &:hover {
        color: #363636;
    }
`;

const InstagramIcon = styled(Instagram)`
    margin-right: 10px;
    color: white;

    &:hover {
        color: #363636;
    }
`;

const TwitterIcon = styled(Twitter)`
    margin-right: 10px;
    color: white;

    &:hover {
        color: #363636;
    }
`;

const Wrapper = styled("div")`
    margin: 30px 0;
`;

const SocialMedia: React.SFC = () => (
    <Wrapper>
        <a href="http://www.facebook.com/thedeafcreator">
            <Facebook height={20} width={20}/>
        </a>
        <a href="http://www.instagram.com/deafcreator">
            <InstagramIcon height={20} width={20}/>
        </a>
        <a href="http://www.twitter.com/deafcreator">
            <TwitterIcon height={20} width={20}/>
        </a>
    </Wrapper>
);

export default SocialMedia;
