import { Box } from '@mui/material';
import React from 'react';
import BringIdeas from '../BringIdeas/BringIdeas';
import background from '../../media/background.svg';
import WhatDo from '../WhatDo/WhatDo';
import Technology from '../Technology/Technology';
import Reference from '../Reference/Reference';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';

const Home = () => {

    const bg = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 99,
    }
    const bgSet = {
        height: "100%",
        width: "100%",
        // transition: "transform 400ms ease-in-out 0s",
        // outline: "none",
        // transform: "translate3d(0px, -300%, 0px)"
    }
    const bgSize = {
        height: "100vh",
        width: "100%",
        // overflow: "hidden"
    }
    return (
        <Box style={bgSet}>
            <Box style={bgSize}>
                <Box style={bg}>
                    <BringIdeas />
                    <WhatDo />
                    <Technology />
                    <Reference />
                    <Team />
                    <Contact />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;