import './App.css';
import NewsList from './components/NewsList';
import ArticlePage from './components/ArticlePage';
import SearchFilter from './components/SearchFilter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/search" element={<SearchFilter />} />
        <Route exact path="/article/:articleTitle" element={<ArticlePage />} />
        <Route exact path="/" element={<NewsList />} />


      </Routes>
    </Router>


  );
}

export default App;
