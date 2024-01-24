const App = () => {
  return (
    <div>
      <Person
        name="Nathaniel"
        age={12}
        hobbies={["golf", "tennis", "cycling"]}
      />
      <Person
        name="John"
        age={25}
        hobbies={["soccer", "basketball", "hiking"]}
      />
      <Person name="Bob" age={18} hobbies={["reading", "writing", "drawing"]} />
      <Person name="Mike" age={30} hobbies={["coding", "cooking", "gaming"]} />
    </div>
  );
};
