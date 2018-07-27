import React, { CSSProperties } from "react";
import artists from "../__fixtures__/artists";
import CrossFadeImage from "./CrossFadeImage";

const ImageStyle: CSSProperties = { objectFit: "cover", position: "fixed", minHeight: "100%", minWidth: "100%"};

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
            <>
                <CrossFadeImage src={artists[this.state.artistIndex].imgUrl}
                    style={ImageStyle}
                    duration={1000}/>
                {this.props.children}
            </>
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
