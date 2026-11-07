import ArticleList from '../App/components/Article_List/ArticleList.jsx';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';


describe('ArticleList', () => {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      date: 'January 1, 2026',
      preview: 'Preview of the first post',
    },
    {
      id: 2,
      title: 'Second Post',
      date: 'February 2, 2026',
      preview: 'Preview of the second post',
    },
  ];

  test('renders one Article per post', () => {
    render(<ArticleList posts={posts} />);

    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(2);
  });
});
