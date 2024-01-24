const Tweet = ({ username, name, date, message }) => {
  const tweetComponent = (
    <div>
      <h1 className="username">{username}</h1>
      <h2 className="name">{name}</h2>
      <p>{date}</p>
      <p>{message}</p>
    </div>
  );
  return tweetComponent;
};
