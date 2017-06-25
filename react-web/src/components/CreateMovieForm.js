import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate) {
  // Prevent form from submitting as normal
  event.preventDefault()
  // Get <form>
  const form = event.target
  // Get data from the forms <input>
  const title = form.elements['title'].value
  const yearReleased = form.elements['yearReleased'].value
  const description = form.elements['description'].value
  
  onCreate({ title, yearReleased, description });
}


export default function CreateMovieForm({
  onCreate
}) {
  return (
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <Field label="Title" name="title" />
      <Field label='Year Released' name="yearReleased" />
      <Field label='Description' name="description" />
      <button type="submit">
        Create Movie
      </button>
    </form>
  )
}