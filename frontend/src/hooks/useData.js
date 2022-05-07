import { useEffect, useState } from 'react'
import dataTest from './data_test'

const useData = () => {
    // подготовил тестовые данные, у себя использовал БД Postgres локально на своей машине. MongoDB без VPN не работает
    const [data, setData] = useState(dataTest)

    useEffect(() => {
        async function getData() {
            await fetch('http://localhost:3001')
                .then((response) => {
                    return response.json()
                })
                .then((response) => setData(response))
                .catch((err) => console.error(err))
        }
        getData()
    }, [])

    return { data }
}

export default useData
