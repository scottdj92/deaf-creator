import React, { CSSProperties } from "react";

interface Props {
    src: string;
    duration?: number;
    // tslint:disable-next-line:max-line-length
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | "steps(int, start | end)" | "cubic-beizer(n, n, n, n)" | "initial" | "inherit";
    delay?: number;
    alt?: string;
    style?: CSSProperties;
    containerClassName?: string;
}

interface State {
    topSrc: string;
    bottomOpacity: number;
    bottomSrc: string;
}

class CrossFadeImage extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        duration: 500,
        timingFunction: "ease",
        delay: 0,
    };

    constructor (props) {
        super(props);
        this.state = {
            topSrc: props.src,
            bottomOpacity: 0,
            bottomSrc: props.src,
        };
    }

    public componentDidUpdate (prevProps: Props) {
        if (prevProps.src !== this.props.src) {
            this.setState({ bottomSrc: "", topSrc: ""}, () =>
                this.setState({ bottomSrc: prevProps.src, topSrc: this.props.src, bottomOpacity: 0.99 }, () => {
                    // TODO: type this
                    if (!this.timeout) {
                        clearTimeout(this.timeout)
                    }
                    this.timeout = setTimeout( () => this.setState({ bottomOpacity: 0 }), 20);
                }),
            );
        }
    }

    public render () {
        const { duration, timingFunction, delay, style, alt, containerClassName } = this.props;
        const { topSrc, bottomOpacity, bottomSrc } = this.state;

        return (
            <div style={{ maxWidth: "100%", maxHeight: "104%" }} className={containerClassName}>
                { topSrc &&
                    <img style={{
                            maxWidth: "100%",
                            maxHeight: "104%",
                            position: "absolute",
                            minHeight: "104%",
                            ...style,
                        }}
                        src={topSrc}
                        alt={alt}
                    />
                }
                { bottomSrc &&
                    <img style={{
                        maxWidth: "100%",
                        maxHeight: "104%",
                        opacity: bottomOpacity,
                        transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`,
                        ...style,
                    }}
                    src={bottomSrc}
                    />
                }
            </div>
        );
    }
}

export default CrossFadeImage;
