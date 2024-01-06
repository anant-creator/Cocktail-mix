import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
    const error = useRouteError();
  return (
    <h4>There was an Error...</h4>
  )
}

export default SinglePageError