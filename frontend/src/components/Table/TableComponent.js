import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import styled from 'styled-components'
import { bg, textColor } from '../theming/Theme'
import TableHead from './TableHead'
import TableBody from './TableBody'

const TableCustom = styled(Table)`
    color: ${textColor};
`

const TableComponent = ({
    isLight,
    items,
    sortConfig,
    pos,
    handleSortClick,
    callback,
    calcItems,
}) => {
    return (
        <Row>
            <Col>
                <TableCustom striped variant={isLight ? 'light' : 'dark'}>
                    <TableHead
                        sortConfig={sortConfig}
                        pos={pos}
                        handleSortClick={handleSortClick}
                    />
                    <TableBody
                        items={items}
                        callback={callback}
                        calcItems={calcItems}
                    />
                </TableCustom>
            </Col>
        </Row>
    )
}

export default TableComponent
