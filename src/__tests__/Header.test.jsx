import Header from '/src/App/components/Header/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('renders the blog name from props inside an h1', () => {
    render(<Header name="My Awesome Blog" />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('My Awesome Blog');
  });

  test('wraps the heading in a <header> element', () => {
    render(<Header name="My Awesome Blog" />);

    const header = screen.getByRole('banner'); // <header> maps to role "banner"
    expect(header).toBeInTheDocument();
    expect(screen.getByText('My Awesome Blog')).toBeInTheDocument();
  });
});
