import * as redux from 'react-redux';
import { render } from '@testing-library/react';

import AllTodos from '.';

const useSelectorMock = jest.spyOn(redux, 'useSelector');
const useDispatchMock = jest.spyOn(redux, 'useDispatch');

describe('AllTodos component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useDispatchMock.mockImplementation(() => jest.fn());
    useSelectorMock.mockReturnValue({
      todos: [
        {
          title: 'Test title',
          description: 'Test description',
          completed: false,
        },
      ],
      fetching: false,
      adding: false,
      updating: false,
      deleting: false,
    });
  });

  it('has the "todo-list" className', () => {
    const { container } = render(<AllTodos />);

    expect(container.getElementsByClassName('todo-list').length).toBe(1);
  });

  it('has the "no-todo" className', () => {
    useSelectorMock.mockReturnValue({ todos: [] });
    const { container } = render(<AllTodos />);

    expect(container.getElementsByClassName('no-todo').length).toBe(1);
  });
});
