import React from 'react'

export default function Movie({
    name,
    description
}) {
    return (
        <div>
            <h2>name:{ name }</h2>
            <h3>description: { description }</h3>
        </div>
    )
}