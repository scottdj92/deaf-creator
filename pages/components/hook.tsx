import React from "react";
import styled from "styled-components";

const Text = styled("p")`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
`;

const Hook: React.SFC = () => (
    <section>
        <Text>
            Join us on our journey of empowering all Deaf/HoH
            artists for a better tomorrow. We're planning a conference
            for <b>deaf artists by deaf artists.</b>
        </Text>
        <Text>
            Help us gauge your interest in making this happen by
            signing up below to join our mailing list and follow us
            on our social channels!
        </Text>
    </section>
);

export default Hook;
