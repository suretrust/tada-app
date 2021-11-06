import * as redux from 'react-redux'
import { render } from '@testing-library/react'

import EditTodo from '.'

const useSelectorMock = jest.spyOn(redux, 'useSelector')
const useDispatchMock = jest.spyOn(redux, 'useDispatch')

const props = {
  todoItem: {
    id: 2,
    title: 'Test title',
    description: 'Test description',
    completed: false
  },
  setShowEditForm: jest.fn()
}

describe('EditTodo component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    useDispatchMock.mockImplementation(() => jest.fn())
    useSelectorMock.mockReturnValue({ updating: false })
  })

  it('has the "edit-todo" wrapper', () => {
    const { queryAllByTestId } = render(<EditTodo {...props} />)

    expect(queryAllByTestId('edit-todo').length).toBe(1)
  })

  it('has the update todo text when updating is false', () => {
    const { queryByTestId } = render(<EditTodo {...props} />)

    expect(queryByTestId('edit-todo')).toHaveTextContent('Update Todo')
  })
})
