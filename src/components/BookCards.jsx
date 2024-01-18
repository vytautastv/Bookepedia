import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import '../styles/BookCards.css';

const fetchBooks = async (query) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.data.items || [];
  };
  
  const BookList = () => {
    const { query } = useParams();
    const { data: books, isLoading, isError } = useQuery(['books', query], () => fetchBooks(query));
  
    return (
      <Box className="book-list" p={4}>
        <div className="results-header">
          Results for "{query}"
        </div>
        {isLoading && <CircularProgress />}
        {isError && <div className="error-message">Error fetching books</div>}
        {books &&
          books.map((book) => (
            <Box key={book.id} className="book-card" mb={4} p={3} boxShadow="md">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url'}
                alt={book.volumeInfo.title}
                className="book-cover"
              />
              <div className="book-title">{book.volumeInfo.title}</div>
              {book.volumeInfo.authors && (
                <div className="author-info">{`Author(s): ${book.volumeInfo.authors.join(', ')}`}</div>
              )}
              {book.volumeInfo.description && (
                <div className="description">{book.volumeInfo.description}</div>
              )}
            </Box>
          ))}
      </Box>
    );
  };
  
  export default BookList;
  