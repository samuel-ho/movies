import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import FilterByCategory from '../components/Filter/FilterByCategory/FilterByCategory.jsx'

it('renders Dropdown with children props passed to component', () => {
  // render new instances
  const { getByText } = render(<FilterByCategory> Genre </FilterByCategory>)

  waitForElement(() => getByText(/Genre/i))
})
