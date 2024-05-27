import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponents = robots.map((robot, i) => (
   <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
	  username={robot.username}
      email={robot.email}
    />
  ));

  return <div>{cardComponents}</div>;
};

export default CardList;