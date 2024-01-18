import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Box, Typography} from '@mui/material';
import '../styles/BookSearch.css';

const BookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (searchQuery.trim() !== '') {
        navigate(`/books/${searchQuery}`);
      }
    };
  
    return (
      <Box className="book-search" p={4}>
        <Typography variant="h4" gutterBottom>
          Book Explorer
        </Typography>
        <Input
          type="text"
          placeholder="Enter book title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    );
  };
  
  export default BookSearch;
  