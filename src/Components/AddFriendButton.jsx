function AddFriendButton({ openAddFriendForm, setOpenAddFriendForm }) {
  function handleClick() {
    setOpenAddFriendForm(!openAddFriendForm);
  }
  return (
    <button onClick={() => handleClick()}>
      {openAddFriendForm == true ? "Close" : "Add Friend"}
    </button>
  );
}

export default AddFriendButton;
