import React, { CSSProperties } from "react";
import artists from "../__fixtures__/artists";
import { Artist } from "../models";
import CrossFadeImage from "./CrossFadeImage";

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
                <CrossFadeImage src={artists[this.state.artistIndex].imgUrl}
                    style={ImageStyle}
                    duration={1000}/>
                {this.props.children}
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
