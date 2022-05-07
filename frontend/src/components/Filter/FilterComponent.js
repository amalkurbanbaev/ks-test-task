import React, { useState } from 'react'
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import styled from 'styled-components'

const FormCustom = styled.form`
    display: flex;
    padding: 0 20px 0 0;

    > div:not(:last-child) {
        margin-right: 10px;
    }
`

const LabelCustom = styled(Form.Label)`
    width: 100%;

    select,
    input,
    button {
        margin-top: 5px;
    }
`

const FilterComponent = ({ items, filters, setFilters, setPage }) => {
    const first = items[0]
    // console.log(filters)
    const handleFilterClick = (e, prop) => {
        setFilters({ ...filters, ...{ [prop]: e.target.value } })
        if (prop === 'value') {
            setPage(1)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setPage(1)
    }

    return (
        <Row>
            <Col>
                <FormCustom
                    onSubmit={handleSubmit}
                    className="flex-column flex-sm-row"
                >
                    <Col xs={12} sm={4}>
                        <LabelCustom>
                            Поле для фильтрации
                            <Form.Select
                                onChange={(e) => handleFilterClick(e, 'field')}
                            >
                                {first &&
                                    Object.keys(first).map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                            </Form.Select>
                        </LabelCustom>
                    </Col>
                    <Col xs={12} sm={4}>
                        <LabelCustom>
                            Условие
                            <Form.Select
                                onChange={(e) =>
                                    handleFilterClick(e, 'condition')
                                }
                            >
                                <option value="equal">равно</option>

                                <option value="include">содержит</option>
                                <option
                                    value="more"
                                    disabled={filters.field === 'name'}
                                >
                                    больше
                                </option>
                                <option
                                    value="less"
                                    disabled={filters.field === 'name'}
                                >
                                    меньше
                                </option>
                            </Form.Select>
                        </LabelCustom>
                    </Col>
                    <Col xs={12} sm={4}>
                        <LabelCustom>
                            Значение
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Введите значение.."
                                    onInput={(e) =>
                                        handleFilterClick(e, 'value')
                                    }
                                />
                            </InputGroup>
                        </LabelCustom>
                    </Col>
                </FormCustom>
            </Col>
        </Row>
    )
}

export default FilterComponent
