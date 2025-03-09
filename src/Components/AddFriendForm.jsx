import { useState } from "react";

function AddFriendForm({ setFriendList, friendList }) {
  const [friendName, setFriendName] = useState("");
  const [url, setUrl] = useState("");
  console.log(friendList);

  function handleClick() {
    setFriendList([
      ...friendList,
      { name: friendName, moneyStatus: 0, imgSrc: url },
    ]);
    setUrl("");
    setFriendName("");
  }
  return (
    <div className="addFriend">
      <div className="inputpair">
        <label for="name">Friend name </label>
        <input
          id="name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>
      <div className="inputpair">
        <label for="url">Image Url </label>
        <input id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>

      <button onClick={() => handleClick()}>Add</button>
    </div>
  );
}

export default AddFriendForm;
