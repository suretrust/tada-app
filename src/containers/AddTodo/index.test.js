import * as redux from 'react-redux'
import { render, fireEvent, screen } from '@testing-library/react'

import AddTodo from '.'

const useSelectorMock = jest.spyOn(redux, 'useSelector')
const useDispatchMock = jest.spyOn(redux, 'useDispatch')

describe('AddTodo component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    useSelectorMock.mockReturnValue({ adding: true })
  })

  it('has the "add-todo" className', () => {
    const { container } = render(<AddTodo />)

    expect(container.getElementsByClassName('add-todo').length).toBe(1)
  })

  it('hides the add todo form by default', () => {
    render(<AddTodo />)

    expect(screen.queryByTestId('add-form')).not.toBeInTheDocument()
  })

  it('shows the add todo form on clicking the add icon', () => {
    render(<AddTodo />)
    fireEvent.click(screen.getByTestId('add-icon'))

    expect(screen.queryByTestId('add-form')).toBeInTheDocument()
  })
})
