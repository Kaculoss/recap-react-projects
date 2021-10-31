import React from "react";

const Birthday = ({ id, name, image, age, styling, handler }) => {
  return (
    <section className={`birthday-section ${styling}`}>
      <div className="birthday">
        <BirthdayImage
          image={`/keezy/birthday-reminder/${image}`}
          name={name}
        />
        <div className="birthday-info">
          <BirthdayName name={name} />
          <BirthdayAge age={age} />
        </div>
      </div>
      <button onClick={() => handler(id)}>remove</button>
    </section>
  );
};

const BirthdayImage = ({ image, name }) => {
  return <img src={image} alt={name} />;
};

const BirthdayName = ({ name }) => {
  return <h3>{name}</h3>;
};

const BirthdayAge = ({ age }) => {
  return <h4>{`${age} years`}</h4>;
};

export default Birthday;
