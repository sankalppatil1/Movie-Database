import { Box, Theme, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../../../App';

function ThemeToggle() {
    const theme: Theme = useTheme()
    const { toggleColorMode } = useContext(ColorModeContext)

    return (
        <Box sx={{
            zIndex: '5', position: 'fixed', top: '2%', right: '2%', borderRadius: '50%', width: '50px', height: '50px', backgroundColor: theme.palette.secondary.main, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ fontSize: '30px', color: theme.palette.primary.main }} onClick={toggleColorMode}></LightModeIcon>
                : <ModeNightIcon sx={{ fontSize: '30px', color: theme.palette.primary.main }} onClick={toggleColorMode}></ModeNightIcon>}
        </Box>
    )
}

export default ThemeToggle