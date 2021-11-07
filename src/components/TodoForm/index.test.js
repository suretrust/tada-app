import { render, fireEvent } from '@testing-library/react';
import TodoForm from '.';

const props = {
  formState: {
    completed: true,
    title: 'Test title',
    description: 'Test description',
  },
  buttonText: 'Test button text',
  isProcessing: false,
  setFormState: jest.fn(),
  hideForm: jest.fn(),
  handleSubmit: jest.fn(),
};

describe('TodoForm component', () => {
  it('has overlay className', () => {
    const { container } = render(<TodoForm {...props} />);

    expect(container.firstChild).toHaveClass('overlay');
  });

  it('has input with placeholder "Enter todo title"', () => {
    const { getAllByPlaceholderText } = render(<TodoForm {...props} />);

    expect(getAllByPlaceholderText('Enter todo title').length).toBe(1);
  });

  it('has input with placeholder "Completed"', () => {
    const { getAllByPlaceholderText } = render(<TodoForm {...props} />);

    expect(getAllByPlaceholderText('Completed').length).toBe(1);
  });

  it('has textarea with placeholder "Enter todo description (110 characters max)"', () => {
    const { getAllByPlaceholderText } = render(<TodoForm {...props} />);

    expect(
      getAllByPlaceholderText('Enter todo description (110 characters max)')
        .length
    ).toBe(1);
  });

  it('fires handleChange when title is changed', () => {
    const { getByTestId } = render(<TodoForm {...props} />);
    const title = getByTestId('title');

    fireEvent.change(title, { target: { value: 'New title' } });

    expect(props.setFormState).toHaveBeenCalled();
  });

  it('fires handleChange when description is changed', () => {
    const { getByTestId } = render(<TodoForm {...props} />);
    const description = getByTestId('description');

    fireEvent.change(description, { target: { value: 'New description' } });

    expect(props.setFormState).toHaveBeenCalled();
  });

  it('fires handleChange when completed is changed', () => {
    const { getByTestId } = render(<TodoForm {...props} />);
    const completed = getByTestId('completed');

    fireEvent.click(completed, { target: { checked: true } });

    expect(props.setFormState).toHaveBeenCalled();
  });

  it('shows the loader component when isProcessing is true', () => {
    const newProps = { ...props, isProcessing: true };
    const { container } = render(<TodoForm {...newProps} />);

    expect(container.getElementsByClassName('loader-icon').length).toBe(1);
  });

  it('hides the loader component when isProcessing is false', () => {
    const { container } = render(<TodoForm {...props} />);

    expect(container.getElementsByClassName('loader').length).toBe(0);
  });
});
