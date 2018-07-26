import React from "react";
import { FacebookF } from "styled-icons/fa-brands/FacebookF.cjs";
import { YoutubeSquare } from "styled-icons/fa-brands/YoutubeSquare.cjs";
import { Instagram } from "styled-icons/fa-brands/Instagram.cjs";
import { Twitter } from "styled-icons/fa-brands/Twitter.cjs";
import styled from "styled-components";

const Facebook = styled(FacebookF)`
    margin-right: 10px;
    color: white;
`;

const InstagramIcon = styled(Instagram)`
    margin-right: 10px;
    color: white;
`;

const TwitterIcon = styled(Twitter)`
    margin-right: 10px;
    color: white;
`;

const YoutubeIcon = styled(YoutubeSquare)`
    color: white;
`;

const SocialMedia: React.SFC = () => (
    <>
        <Facebook height={20} width={20}/>
        <InstagramIcon height={20} width={20}/>
        <TwitterIcon height={20} width={20}/>
        <YoutubeIcon height={20} width={20}/>
    </>
);

export default SocialMedia;
