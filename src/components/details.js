import React from 'react';
import PropTypes from 'prop-types';
import './styles/details.css';

const Details = ({ props }) => {
  const detailsArr = [
    'Score', 'Type', 'Source', 'Status', 'Season',
  ];
  const infoArr = [
    props.score,
    props.details.type, props.details.source,
    props.details.status, props.details.year,
  ];

  const detailsDisplay = [];

  for (let i = 0; i < detailsArr.length; i += 1) {
    detailsDisplay.push(
      <li key={i} className="detailList">
        <span className="infoText">
          {detailsArr[i]}
          :
        </span>
        <span className="infoText">
          {infoArr[i]}
        </span>
      </li>,
    );
  }

  return (
    <div key={props.title}>
      <div className="headline">
        <h1>{props.title}</h1>
      </div>
      <div className="details">
        <h4>Anime Details</h4>
      </div>
      <ul>
        {detailsDisplay}
      </ul>
    </div>
  );
};

Details.propTypes = {
  props: PropTypes.node,
  title: PropTypes.string,
  score: PropTypes.number,
  type: PropTypes.string,
  source: PropTypes.string,
  status: PropTypes.string,
  year: PropTypes.number,
  details: PropTypes.node,
};

export default Details;
