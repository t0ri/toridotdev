import React from 'react'

function Project({ match }) {
  return (
    <h2>
      This is a page for project with ID:
      {match.params.id}
    </h2>
  )
}

export default Project
