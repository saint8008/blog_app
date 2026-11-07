import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import App from '/src/App/App';

describe('App', () => {
  test('renders the Header with the blog name', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    // Replace with whatever name App passes to <Header>
    expect(heading).toHaveTextContent(/blog/i);
  });

  test('renders the About section with the blog logo', () => {
    render(<App />);

    expect(screen.getByAltText('blog logo')).toBeInTheDocument();
  });

  test('renders the ArticleList inside a <main> element', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders multiple articles', () => {
    render(<App />);

    // Adjust the number to match how many posts App passes to ArticleList
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBeGreaterThan(0);
  });
});