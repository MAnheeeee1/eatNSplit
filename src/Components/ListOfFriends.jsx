import Friend from "./Friend";
function ListOfFriends({ friendList, current, setCurrent }) {
  console.log(friendList);
  return (
    <div className="listofFriend">
      {friendList.map((friend) => (
        <Friend
          name={friend.name}
          moneyStatus={friend.moneyStatus}
          imgSrc={friend.imgSrc}
          current={current}
          setCurrent={setCurrent}
        />
      ))}
    </div>
  );
}

export default ListOfFriends;
