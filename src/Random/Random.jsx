import React from 'react';
import './Random.css';

export default function Random(props) {
  const randomNumber = Math.floor(Math.random() * props.max);

  return (
    <div className="random_number-container">
      <h3>
        Random value between {props.min} and {props.max}: {randomNumber}
      </h3>
    </div>
  );
}
