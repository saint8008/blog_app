import "./app.css";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import ArticleList from "./Article_List/ArticleList.jsx";

const posts = [
  {
    id: 1,
    title: "The Future of React",
    date: "November 7, 2026",
    preview: "React continues to evolve with new features...",
  },
  {
    id: 2,
    title: "Understanding Hooks",
    date: "October 15, 2026",
    preview: "Hooks changed the way we write functional components...",
  },
  {
    id: 3,
    title: "CSS-in-JS vs Tailwind",
    date: "September 2, 2026",
    preview: "Choosing the right styling approach for your project...",
  },
];

function App() {
  return (
    <div>
      <Header name="My personal Blog"/>
      <About 
        image="" 
        about="Welcome to my blog where I share my thoughts on web development!"
      />
      <ArticleList posts={posts}/>
    </div>
  )
}

export default App;