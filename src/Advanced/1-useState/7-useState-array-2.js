import React, { useState } from "react";
import { data } from "../data";

const UseStateArray2 = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray2;
