function Friend({ imgSrc, name, moneyStatus, current, setCurrent }) {
  function handleClick() {
    if (current == name) {
      setCurrent("");
    } else {
      setCurrent(name);
    }
  }
  return (
    <div className="friendCard">
      <img src={imgSrc} alt="profile image" />
      <div className="friendContainer">
        <h1>{name}</h1>
        {moneyStatus > 0 ? (
          <p style={{ color: "green" }}>
            {current} own you{moneyStatus}$
          </p>
        ) : (
          <p style={{ color: "red" }}>
            You own {current} {moneyStatus * -1}$
          </p>
        )}
      </div>

      <button onClick={() => handleClick()}>
        {current == name ? "Close" : "Select"}
      </button>
    </div>
  );
}

export default Friend;
