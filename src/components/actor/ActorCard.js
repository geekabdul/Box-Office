import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, birthday, deathday, country }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name}
        {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country know'}</p>
      {birthday ? <p>Born on: {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
