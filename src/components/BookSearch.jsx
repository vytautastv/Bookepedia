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
        <Typography variant="h4" gutterBottom style={{ color: 'rgb(102, 97, 82)'}}>
          Bookepedia 
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: 'rgb(102, 97, 82)'}}>
        Embark on a journey of literary discovery with books by your favourite authors! 
        </Typography>
        <Input
          type="text"
          placeholder="Enter book title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disableUnderline
          style = {{width: "400px"}}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      
    );
  };
  
  export default BookSearch;
  