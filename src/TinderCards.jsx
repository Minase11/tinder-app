import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetch() {
      const cards = await axios.get("/tinder/cards");
      setPeople(cards.data);
    }
    fetch();
  }, []);

  const swiped = (direction, name) => {
    console.log(`removing ${name} ${direction}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      {people.map((person, index) => (
        <TinderCard
          key={index}
          className="swipe"
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.imgUrl})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
