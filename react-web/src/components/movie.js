import React from 'react'

export default function Movie({
    title,
    yearReleased,
    description,
    writers,
    directors,
    cast
}) {
    return (
    <article>
        <h2>{ title } <small>({ yearReleased })</small></h2>
        <p>{ description }</p>
    </article>
    )
}