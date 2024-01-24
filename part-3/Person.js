const Person = ({ name, age, hobbies }) => {
  // If name is longer than 8 characters, shorten it to the first 6.
  const nameShortened = name.length > 8 ? name.substring(0, 6) : name;
  const pTag = <p>Learn some information about this person.</p>;
  const pProperties = (
    <p>
      Name: {nameShortened}, Age: {age}
    </p>
  );
  const adultCheck =
    age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18 to vote</h3>;

  const hobbyList = hobbies.map((h) => {
    return <li>{h}</li>;
  });

  return (
    <div>
      {pTag} {pProperties} {adultCheck}
      <ul>{hobbyList}</ul>
    </div>
  );
};
