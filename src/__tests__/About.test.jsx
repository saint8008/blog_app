import About from '/src/App/components/About/About';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('About', () => {
  test('renders the image with alt text and the about text', () => {
    render(
      <About
        image="https://via.placeholder.com/215"
        about="Welcome to my blog!"
      />
    );

    const img = screen.getByAltText('blog logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://via.placeholder.com/215');
    expect(screen.getByText('Welcome to my blog!')).toBeInTheDocument();
  });
});