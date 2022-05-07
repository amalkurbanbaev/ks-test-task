/* eslint-disable eqeqeq */
import { useState } from 'react'

const useFilter = (items) => {
    const [filters, setFilters] = useState({
        field: 'id',
        condition: 'equal',
        value: '',
    })

    items.filter((item) => {
        return item.field === filters.value
    })

    const callback = (item) => {
        console.log(filters)

        const itemField = item[filters.field]

        if (filters.value) {
            if (filters.condition === 'equal') {
                return itemField == filters.value
            }
            if (filters.condition === 'include') {
                return (
                    String(itemField)
                        .toLowerCase()
                        .indexOf(filters.value.toLowerCase()) >= 0 && item
                )
            }
            if (filters.condition === 'more') {
                return itemField > filters.value
            }
            if (filters.condition === 'less') {
                return itemField < filters.value
            }
        }

        return item
    }

    return { filters, setFilters, callback }
}

export default useFilter
