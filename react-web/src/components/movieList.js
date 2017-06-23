
import React from 'react'
import Movie from './movie'

export default function MovieList({
    items
}) {
    return (
        <div>
        {
            items.map((item, index) => (
                <Movie key={ index }
                    name={ item.name }
                    description={ item.description }
                />
            ))
        }
        </div>
    )
}