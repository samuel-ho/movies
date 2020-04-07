import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import Movie from '../components/Movie/Movie.jsx'

it('movie title exists', () => {
  const { queryByMovieTitle } = render(<Movie movieTitle='The Dark Knight' />)
  waitForElement(() => expect(queryByMovieTitle(/movieTitle/i)).toBeTruthy())
})

it('movie title matches our expectation', () => {
  const { getByMovieTitle } = render(<Movie movieTitle='Batman' />)
  waitForElement(() =>
    expect(getByMovieTitle(/movieTitle/i).textContent).toBe('Batman')
  )
})
