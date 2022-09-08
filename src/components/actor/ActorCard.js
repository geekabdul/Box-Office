import React from 'react';

const ActorCard = ({ image, name, gender, birthday, deathday, country }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name}
        {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country know'}</p>
      {birthday ? <p>Born on: {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
