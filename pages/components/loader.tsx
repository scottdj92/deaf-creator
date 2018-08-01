import React from "react";
import { Spinner } from "styled-icons/fa-solid/Spinner.cjs";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled(Spinner)`
    animation: ${rotate360} 1s linear infinite;
    margin-right: 5px;
`;

const Loader: React.SFC = () => (
    <LoadingSpinner height={20} width={20}/>
);

export default Loader;
