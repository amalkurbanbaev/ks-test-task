import React from 'react'
import styled from 'styled-components'

const TableRowCustom = styled.tr`
    th {
        cursor: pointer;
    }
    th:nth-child(${(props) => props.target}) {
        &:after {
            content: ${(props) => (props.dir === 'ascending' ? '"▲"' : '"▼"')};
            width: 0;
            display: inline-block;
            margin-left: 1em;
        }
    }
`

const TableHead = ({ sortConfig, pos, handleSortClick }) => {
    return (
        <thead>
            <TableRowCustom dir={sortConfig.direction} target={pos}>
                <th>id</th>
                <th>Дата</th>
                <th onClick={() => handleSortClick('name', 3)}>Название</th>
                <th onClick={() => handleSortClick('count', 4)}>Количество</th>
                <th onClick={() => handleSortClick('dist', 5)}>
                    Расстояние (м)
                </th>
            </TableRowCustom>
        </thead>
    )
}

export default TableHead
