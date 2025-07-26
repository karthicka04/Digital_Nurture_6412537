import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, status, instructor }) {
  const titleStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Instructor:</dt>
        <dd>{instructor}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

