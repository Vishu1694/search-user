import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='user'
      src={`https://robohash.org/${props.user.id}?set=set5&size=120x120`}
    />
    <h2> NAME: {props.user.name} </h2>
    <p> Email: {props.user.email} </p>
    <p> Website: {props.user.website}</p>
    <p>Company: {props.user.company.name}</p>
  </div>
);
