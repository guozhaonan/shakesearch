import React, { useState } from 'react';
import getShakespeareTextMatches from '../../api/service';
import Loading from '../Loading/Loading';
import ResultList from './Results/ResultList';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [results, setResults] = useState(['hi this is a specific set of strings that we can then parse either side of']);

  const handleTextSearch = (query) => {
    setIsApiLoading(true);
    getShakespeareTextMatches(query)
      .then((response) => {
        console.log(response);
        setIsApiLoading(false);
        setSearchPerformed(true);
        setResults(response.data);
      })
      .catch((error) => {
        setIsApiLoading(false);
        console.error(error);
      });
  };

  const handleClickSearchButton = () => {
    handleTextSearch(searchInput);
  };

  return (
    <>
      <div className="search-bar-container">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchInput}
            disabled={isApiLoading}
            onChange={(e) => setSearchInput(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  disabled={isApiLoading}
                  onClick={handleClickSearchButton}
                  edge="end"
                  >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
      </div>
      {isApiLoading && (
        <Loading />
      )}
      {(!isApiLoading && searchPerformed) && (
        <ResultList results={results} searchString={searchInput}/>
      )}
    </>
  );
}

export default Search;
