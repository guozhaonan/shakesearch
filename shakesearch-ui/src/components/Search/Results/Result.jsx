import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { KeyboardArrowDown, KeyboardArrowUp, MenuBook, NavigateNext } from '@mui/icons-material';
import './Result.css';

const Result = ({result, searchString}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const BREADCRUMBS_CONSTANT = [
    <Typography key="1" color="text.primary">
      Play X
    </Typography>,
    <Typography key="2" color="text.primary">
      Act Y
    </Typography>,
    <Typography key="3" color="text.primary">
      Scene Z
    </Typography>,
  ]
  const [left, right] = result.split(searchString);
  const leftUnexpandedText = left.trim().split(' ').slice(-5).join(' ');
  const rightUnexpandedText = right.trim().split(' ').slice(0,5).join(' ');
  const unexpandedText = `...${leftUnexpandedText} ${searchString} ${rightUnexpandedText}...`
  const handleClickResult = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="result-card">
      <div>
        <Tooltip title="Requires change of API to implement" placement="top">
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            {BREADCRUMBS_CONSTANT}
          </Breadcrumbs>
        </Tooltip>
      </div>
      <div className="result-card-contents-container">
        <MenuBook />
        {isExpanded ? (
          <div className="expanded-text">...{left.trim()} <span className="highlighted-text">{searchString}</span> {right.trim()}...</div>
          ) : (
          <div className="unexpanded-text">...{leftUnexpandedText} <span className="highlighted-text">{searchString}</span> {rightUnexpandedText}...</div>
        )}
        <div className="expand-button" onClick={handleClickResult}>
          {isExpanded ? (<KeyboardArrowUp />) : (<KeyboardArrowDown />)}
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.string,
  searchString: PropTypes.string,
};

Result.defaultProps = {
  result: '',
  searchString: '',
}

export default Result;
