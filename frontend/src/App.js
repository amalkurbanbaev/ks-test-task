import React from 'react'
import Header from './components/Header'
import ContainerComponent from './components/ContainerComponent'
import GlobalStyle from './components/theming/GlobalStyle'
import { Theme } from './components/theming/Theme'
import useTheme from './hooks/UI/useTheme'
import useData from './hooks/useData'

const App = () => {
    const themeSwitcher = useTheme()
    const { data } = useData()

    return (
        <Theme isLight={themeSwitcher.isLight}>
            <GlobalStyle />

            <Header switchTheme={themeSwitcher.switchTheme} />
            <ContainerComponent isLight={themeSwitcher.isLight} data={data} />
        </Theme>
    )
}

export default App
