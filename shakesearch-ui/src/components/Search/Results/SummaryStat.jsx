import React from 'react';
import PropTypes from 'prop-types';
import './SummaryStat.css';

const SummaryStat = ({label, value}) => {
  return (
    <div className="summary-stat">
      <h5>{label}:</h5>
      <h5>{value}</h5>
    </div>
  );
}

SummaryStat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SummaryStat;
