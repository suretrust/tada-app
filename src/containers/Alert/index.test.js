import * as redux from 'react-redux'
import { render, fireEvent, screen } from '@testing-library/react'

import Alert from '.'

const useSelectorMock = jest.spyOn(redux, 'useSelector')
const useDispatchMock = jest.spyOn(redux, 'useDispatch')

describe('Alert component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    useDispatchMock.mockImplementation(() => jest.fn())
    useSelectorMock.mockReturnValue({ text: 'Working test', error: true })
  })

  it('has the "alert" className', () => {
    const { container } = render(<Alert />)

    expect(container.getElementsByClassName('alert').length).toBe(1)
  })

  it('has the "icon" className', () => {
    const { container } = render(<Alert />)

    expect(container.getElementsByClassName('icon').length).toBe(1)
  })

  it('renders the text returned from store', () => {
    render(<Alert />)

    expect(screen.queryByTestId('alert')).toHaveTextContent('Working test')
  })

  it('dispatches data to store on clicking the alert-icon', () => {
    render(<Alert />)
    fireEvent.click(screen.getByTestId('alert-icon'))
    useSelectorMock.mockReturnValue({ text: null, error: false })

    expect(useDispatchMock).toHaveBeenCalled()
  })

  it('shows error alert when error is true', () => {
    const { container } = render(<Alert />)

    expect(container.getElementsByClassName('error').length).toBe(1)
  })

  it('hides error alert when error is false', () => {
    useSelectorMock.mockReturnValue({ text: 'Working test', error: false })
    const { container } = render(<Alert />)

    expect(container.getElementsByClassName('error').length).toBe(0)
  })
})
