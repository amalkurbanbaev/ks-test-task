import React, { useState, useEffect, useMemo } from 'react'

const useSortableData = (data, config = {}) => {
    const [sortConfig, setSortConfig] = useState(config)

    // делаем сортировку по заданному конфигу
    const sortedItems = useMemo(() => {
        // скопируем исходный массив с сервера
        const sortableItems = [...data]
        if (sortConfig !== null) {
            sortableItems.sort((prev, next) => {
                if (prev[sortConfig.key] < next[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (prev[sortConfig.key] > next[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }

        return sortableItems
    }, [sortConfig, data])

    // переписываем конфиг (меняем направление сортировки, первый раз заходим с пустым конфигом)
    const requestSort = (key) => {
        let direction = 'ascending'
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    return {
        items: sortedItems,
        requestSort,
        sortConfig,
    }
}

export default useSortableData
