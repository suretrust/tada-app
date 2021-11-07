import { render } from '@testing-library/react';
import Loading from '.';

describe('Loading component', () => {
  it('has correct className', () => {
    const { container } = render(<Loading size={20} />);

    expect(container.firstChild).toHaveClass('loader');
  });
});
