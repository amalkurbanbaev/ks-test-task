import { useState } from 'react'

// page 1 = 0 - 4
// page 2 = 5 - 9
// page 3 = 10 - ...

// # Пагинация
const usePagination = () => {
    const [page, setPage] = useState(1) // 1 страница = 5 элементов

    return { page, setPage }
}

export default usePagination
