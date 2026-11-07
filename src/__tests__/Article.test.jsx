import Article from '../App/components/ArticleList/Article/Article.jsx';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';


describe('Article', () => {
  test('renders title, date, and preview from props', () => {
    render(
      <Article
        title="The Future of React"
        date="November 7, 2026"
        preview="React continues to evolve..."
      />
    );

    expect(screen.getByText('The Future of React')).toBeInTheDocument();
    expect(screen.getByText('November 7, 2026')).toBeInTheDocument();
    expect(screen.getByText('React continues to evolve...')).toBeInTheDocument();
  });
});