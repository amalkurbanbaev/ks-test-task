import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import { textColor } from './theming/Theme'

const ContainerCustom = styled(Container)`
    color: ${textColor};
`

const Title = styled.h1`
    font-size: 24px;
`

const Header = ({ switchTheme }) => {
    return (
        <ContainerCustom>
            <Row className="mt-5 mb-5 justify-content-between">
                <Col>
                    <Title>Тестовое задание</Title>
                </Col>
                <Col className="text-end">
                    <Button onClick={() => switchTheme()}>Сменить тему</Button>
                </Col>
            </Row>
        </ContainerCustom>
    )
}

export default Header
