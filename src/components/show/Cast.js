import React from 'react';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { CastList } from './Cast.styled';

const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMAGE_NOT_FOUND}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name}</span> as{' '}
              <i>{character.name}</i>
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
