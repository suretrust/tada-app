import { render, screen, fireEvent } from '@testing-library/react'
import SingleTodo from '.'

const props = {
  todo: {
    id: 2,
    completed: true,
    title: 'Test title',
    description: 'Test description'
  },
  currentTodoId: 2,
  isProcessing: false,
  handleEditTodo: jest.fn(),
  handleTodoCompleted: jest.fn(),
  handleDeleteTodo: jest.fn()
}

describe('SingleTodo component', () => {
  it('has completed className when to do is completed', () => {
    const { container } = render(<SingleTodo {...props} />)

    expect(container.firstChild).toHaveClass('completed')
  })

  it('has "single-todo" className when to do is not completed', () => {
    const newProps = { ...props, todo: { ...props.todo, completed: false } }
    const { container } = render(<SingleTodo {...newProps} />)

    expect(container.firstChild).toHaveClass('single-todo')
  })

  it('has the correct title based on the props', () => {
    render(<SingleTodo {...props} />)

    expect(screen.getByRole('heading')).toHaveTextContent(props.todo.title)
  })

  it('has the correct description based on the props', () => {
    const { container } = render(<SingleTodo {...props} />)
    const smallTag = container.querySelector('small')

    expect(smallTag).toHaveTextContent(props.todo.description)
  })

  it('has "icons-box" className when isProcessing is false', () => {
    const { container } = render(<SingleTodo {...props} />)

    expect(container.getElementsByClassName('icons-box').length).toBe(1)
  })

  it('has no "icons-box" className when isProcessing is true', () => {
    const newProps = { ...props, isProcessing: true }
    const { container } = render(<SingleTodo {...newProps} />)

    expect(container.getElementsByClassName('icons-box').length).toBe(0)
  })

  it('renders with a className equal to the variant', () => {
    const { container } = render(<SingleTodo {...props} />)

    expect(container.getElementsByClassName('pointer').length).toBe(3)
  })

  it('calls handleEditTodo on clicking the edit icon', () => {
    render(<SingleTodo {...props} />)
    fireEvent.click(screen.getByTestId('edit'))

    expect(props.handleEditTodo).toHaveBeenCalled()
  })

  it('calls handleTodoCompleted on clicking the incomplete icon', () => {
    render(<SingleTodo {...props} />)
    fireEvent.click(screen.getByTestId('incomplete'))

    expect(props.handleTodoCompleted).toHaveBeenCalled()
  })

  it('shows the complete icon when todo is incomplete', () => {
    const newProps = { ...props, todo: { ...props.todo, completed: false } }
    render(<SingleTodo {...newProps} />)
    fireEvent.click(screen.getByTestId('complete'))

    expect(props.handleTodoCompleted).toHaveBeenCalled()
  })

  it('calls handleDeleteTodo on clicking the delete icon', () => {
    render(<SingleTodo {...props} />)
    fireEvent.click(screen.getByTestId('delete'))

    expect(props.handleDeleteTodo).toHaveBeenCalled()
  })
})
