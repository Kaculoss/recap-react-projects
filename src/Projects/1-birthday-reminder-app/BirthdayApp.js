import React, { useState } from "react";
import Birthday from "./Birthday";
import "./BirthdayApp.css";
import { allBirthdays } from "./birthdayData";

function BirthdayApp() {
  const [birthdays, setBirthdays] = useState(allBirthdays);

  const removeBirthday = (id) => {
    setBirthdays((prevBirthdayList) => {
      return prevBirthdayList.filter((birthday) => birthday.id !== id);
    });
  };
  return (
    <div className="birthday-app">
      <h2>{birthdays.length} birthdays today</h2>
      {birthdays.map((birthday) => {
        const { id, name, age, image } = birthday;
        let styleBackground;
        id % 2 !== 0
          ? (styleBackground = "color-background")
          : (styleBackground = "");
        return (
          <Birthday
            key={id}
            id={id}
            name={name}
            age={age}
            image={image}
            handler={removeBirthday}
            styling={styleBackground}
          />
        );
      })}
      <div className="birthday-app-button">
        <button onClick={() => setBirthdays([])}>Clear All</button>
      </div>
    </div>
  );
}

export default BirthdayApp;
