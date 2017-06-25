import React from 'react'


export default function PersonRole({
    person,
    role
}) {
    return (
        <div>
            { person.firstName } { person.lastName }
            { ' — ' }
            { role }
        </div>
    )
}