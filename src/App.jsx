import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import BookSearch from './components/BookSearch';
import BookCards from './components/BookCards';
import Footer from './components/Footer';
import NavBar from './components/NavBar';



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <NavBar />
        <Routes>
            <Route path="/" element={<BookSearch />} />
            <Route path="/books/:query" element={<BookCards />} />
      
        </Routes> 
        <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
