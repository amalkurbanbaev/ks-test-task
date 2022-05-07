import React, { useState } from 'react'
import styled from 'styled-components'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { textColor } from './theming/Theme'
import PaginationComponent from './Pagintaion/PaginationComponent'
import useSortableData from '../hooks/useSortableData'
import usePagination from '../hooks/usePagination'
import FilterComponent from './Filter/FilterComponent'
import useFilter from '../hooks/useFilter'
import TableComponent from './Table/TableComponent'

// цвета и другие CSS свойства берутся из мною написанной дизайн системы основанной на styled-components (./theming/Theme)
const ContainerCustom = styled(Container)`
    color: ${textColor};
    font-size: 14px;
`

const ContainerComponent = ({ isLight, data }) => {
    // # Сортировка
    const { items, requestSort, sortConfig } = useSortableData(data)
    const [pos, setPos] = useState() // сетим позицию кликнутого элемента
    const handleSortClick = (field, myPos) => {
        requestSort(field)
        setPos(myPos) // для отображения иконки направления сортировки
    }

    // # Пагинация
    const { page, setPage } = usePagination()

    // # Фильтр
    const { filters, setFilters, callback } = useFilter(data)
    console.log(items.filter(callback).length)
    const calcItems = () => {
        return (page - 1) * 5
    }
    // props drilling получился, потому что не стал использовать контекст и redux, но считаю что все понятно для маленького приложения
    return (
        <ContainerCustom>
            <FilterComponent
                items={items}
                filters={filters}
                setFilters={setFilters}
                equal={callback}
                setPage={setPage}
            />

            <TableComponent
                isLight={isLight}
                items={items}
                sortConfig={sortConfig}
                pos={pos}
                handleSortClick={handleSortClick}
                callback={callback}
                calcItems={calcItems}
            />

            <PaginationComponent
                len={items.filter(callback).length}
                page={page}
                setPage={setPage}
            />
        </ContainerCustom>
    )
}

export default ContainerComponent
