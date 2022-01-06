import { Box } from '@mui/system';
import React from 'react';

const Sidebar = () => {
    const sidebarProgress = {}
    const sidebarLogo = {}
    const sidebarBuger = {}
    const sidebarSIcon = {}
    return (
        <Box>
            {/* sidebar progress line */}
            <Box style={sidebarProgress}></Box>
            {/* sidebar logo */}
            <Box style={sidebarLogo}></Box>
            {/* sidebar burger */}
            <Box style={sidebarBuger}></Box>
            {/* sidebar social icons */}
            <Box style={sidebarSIcon}></Box>
        </Box>
    );
};

export default Sidebar;