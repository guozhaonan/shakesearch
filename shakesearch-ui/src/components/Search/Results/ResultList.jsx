import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import SummaryStat from './SummaryStat';
import './ResultList.css';

const ResultList = ({results, searchString}) => {
  // Empty State
  if (results.length === 0) {
    return (
      <div>There are no results</div>
    );
  }
  return (
    <div className="result-list-container">
      <div className="summary-container">
        <SummaryStat label="Results" value={results.length} />
      </div>
      {results.map((result, resultIdx) => {
        return <Result result={result} searchString={searchString} key={resultIdx} />
      })}
    </div>
  );
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
  searchString: PropTypes.string,
};

ResultList.defaultProps = {
  results: [],
  searchString: '',
}

export default ResultList;
