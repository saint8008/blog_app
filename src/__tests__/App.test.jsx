//import { render, screen } from '@testing-library/react';
import Header from '/src/App/Header/Header';
import About from '/src/App/About/About';
import Article from '/src/App/Article_List/Article/Article.jsx';
import ArticleList from '/src/App/Article_list/ArticleList';
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