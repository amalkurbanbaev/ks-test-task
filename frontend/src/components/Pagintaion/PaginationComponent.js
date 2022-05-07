import React, { useState } from 'react'
import { Pagination, Row } from 'react-bootstrap'

const PaginationComponent = ({ len, page, setPage }) => {
    const items = []
    const tail = len % 5 // если без остататка то отображать нужно только 5 элементов, то есть показывать ровно 1 страницу
    for (
        let number = 1;
        number <= parseInt(!tail ? 1 : len / 5 + 1, 10); // тут цикл определяет сколько будет страниц в пагинации
        number += 1
    ) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => setPage(number)}
            >
                {number}
            </Pagination.Item>
        )
    }
    return (
        <Row>
            <Pagination className="justify-content-center" size="lg">
                {items}
            </Pagination>
        </Row>
    )
}

export default PaginationComponent
