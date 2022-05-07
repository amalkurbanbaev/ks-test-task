import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import theme from 'styled-theming'

// небольшая дизайн система
export const bg = theme('mode', {
    light: '#f8f9fa',
    dark: '#212121',
})

export const textColor = theme('mode', {
    light: '#191A1A',
    dark: '#F4F4F4',
})

export function Theme({ children, isLight }) {
    return (
        <ThemeProvider theme={{ mode: isLight ? 'light' : 'dark' }}>
            {children}
        </ThemeProvider>
    )
}
