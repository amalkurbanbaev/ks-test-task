import React from 'react'

const TableBody = ({ items, callback, calcItems }) => {
    // filter() - принимает колбэк, который в хуке перебирает элементы из сортированного массива по ключам из фильтра и возвращает удовлетворяющие условиям элементы
    // slice() - для пагинации, смотрит на уже отсортированный массив, и выбирает рендж который будет показывать
    return (
        <tbody>
            {items ? (
                items
                    .filter(callback)
                    .slice(calcItems(), calcItems() + 5)
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.date_by.slice(0, 10)}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>{item.dist}</td>
                        </tr>
                    ))
            ) : (
                <div>Loading...</div>
            )}
        </tbody>
    )
}

export default TableBody
