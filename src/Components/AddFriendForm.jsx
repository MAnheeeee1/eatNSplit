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
    <div>
      <label>
        Friend name{" "}
        <input
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </label>
      <label>
        Image Url <input value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button onClick={() => handleClick()}>Add</button>
    </div>
  );
}

export default AddFriendForm;
