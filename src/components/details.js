import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ props }) => {
  const detailsArr = [
    'Title', 'Score', 'Type', 'Source', 'Status', 'Year',
  ];

  const infoArr = [
    props.title, props.score, props.type, props.source, props.type, props.status, props.year,
  ];

  const detailsDisplay = [];

  for (let i = 0; i < 8; i += 1) {
    detailsDisplay.push(
      <li key={i}>
        <span>{detailsArr}</span>
        <span>{infoArr}</span>
      </li>,
    );
  }

  return (
    <div key={props.title}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <ul>
        {detailsDisplay}
      </ul>
    </div>
  );
};

Details.propTypes = {
  props: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Details;
