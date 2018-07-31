import React, { CSSProperties } from "react";
import artists from "../__fixtures__/artists";
import { Artist } from "../models";
import CrossFadeImage from "./CrossFadeImage";
import styled from "styled-components";

const CrossFadeWrapper = styled("div")`
    @media screen and (max-width: 576px) {
        display: none;
    }
`;

const BlackWrapper = styled("div")`
    background-image: none;
    background-repeat: none;

    @media screen and (max-width: 576px) {
        background-image: url("/static/images/black_mamba.png");
        background-repeat: repeat;
    }
`;

const ImageStyle: CSSProperties = { objectFit: "cover", position: "fixed", minHeight: "100%", minWidth: "100%"};

export const ArtistContext = React.createContext<Artist>({
    fullName: "",
    imgUrl: "",
    websiteUrl: "",
});

interface State {
    artistIndex: number;
}

class Background extends React.Component<{}, State> {
    public state = { artistIndex: 0 };
    public componentDidMount () {
        setInterval(this.cycleArtists, 5000);
    }

    public render () {
        return (
            <ArtistContext.Provider value={artists[this.state.artistIndex]}>
                <CrossFadeWrapper>
                    <CrossFadeImage src={artists[this.state.artistIndex].imgUrl}
                        style={ImageStyle}
                        duration={1000}/>
                </CrossFadeWrapper>
                <BlackWrapper>
                    {this.props.children}
                </BlackWrapper>
            </ArtistContext.Provider>
        );
    }

    private cycleArtists = () => {
        if (this.state.artistIndex === artists.length - 1) {
            this.setState({ artistIndex: 0 });

        } else {
            this.setState({ artistIndex: this.state.artistIndex + 1 });
        }
    }
}

export default Background;
