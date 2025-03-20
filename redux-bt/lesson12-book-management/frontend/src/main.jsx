import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import BookList from './components/BookList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookDetail from './components/BookDetail.jsx';
import BookCreate from './components/BookCreate.jsx';
import BookEdit from './components/BookEdit.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* react router v5 Switch => replace thành Routes */}
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/create" element={<BookCreate />} />
        <Route path="/books/edit/:id" element={<BookEdit />} />
      </Routes>
    </Router>
  </StrictMode>
);
