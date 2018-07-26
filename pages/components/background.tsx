import React from "react";
import styled from "styled-components";
import artists from "../__fixtures__/artists";
import CrossfadeImage from "react-crossfade-image";

const Image = styled.img`
    object-fit: center;
    position: fixed;
    min-height: 100%;
    min-width: 100%;
`;

interface State {
    artistIndex: number;
}

class Background extends React.Component<{}, State> {
    public state = { artistIndex: 0 };
    public componentDidMount () {
        setInterval(this.cycleArtists, 5000);
    }

    public componentWillUnmount () {
        // clear intervals
        clearInterval(this.cycleArtists);
    }

    public render () {
        return (
            <>
                <Image src={artists[this.state.artistIndex].imgUrl}
                />
                {this.props.children}
            </>
        );
    }

    private cycleArtists = () => {
        if (this.state.artistIndex === artists.length) {
            this.setState({ artistIndex: 0 });
        } else {
            this.setState({ artistIndex: this.state.artistIndex++ });
        }
    }
}

export default Background;
