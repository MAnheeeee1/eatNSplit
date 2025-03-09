import { useState } from "react";
function SplitTheBillForm({ currentSelected, friendlist, setfriendlist }) {
  const [billValue, setBillValue] = useState(100);
  const [yourExpense, setYourExpense] = useState(20);
  const [friendExpense, setFriendExpense] = useState(80);
  const [thePersonPaying, setThePersonPaying] = useState("you");
  function handleClick() {
    console.log("e");
    const clonedfriendList = [...friendlist];
    console.log(clonedfriendList);
    if (thePersonPaying == "you") {
      setfriendlist(
        clonedfriendList.map((friend) => {
          if (friend.name == currentSelected) {
            const updatedMoneyStatus = (friend.moneyStatus += friendExpense);
            return {
              name: friend.name,
              moneyStatus: updatedMoneyStatus,
              imgSrc: friend.imgSrc,
            };
          } else return friend;
        })
      );
    } else {
      setfriendlist(
        clonedfriendList.map((friend) => {
          if (friend.name == currentSelected) {
            const updatedMoneyStatus = (friend.moneyStatus -= yourExpense);
            return {
              name: friend.name,
              moneyStatus: updatedMoneyStatus,
              imgSrc: friend.imgSrc,
            };
          } else return friend;
        })
      );
    }
  }
  return (
    <div>
      <h1>Split a bill with {currentSelected}</h1>
      <label>
        Bill value
        <input
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
        />
      </label>
      <label>
        Your expense
        <input
          value={yourExpense}
          onChange={(e) => setYourExpense(e.target.value)}
        />
      </label>
      <label>
        {currentSelected}´s expense
        <input
          value={friendExpense}
          onChange={(e) => setFriendExpense(e.target.value)}
        />
      </label>
      <label>
        Who is paying the bill?
        <select
          value={thePersonPaying}
          onChange={(e) => setThePersonPaying(e.target.value)}
        >
          <option value="you">You</option>
          <option value={currentSelected}>{currentSelected}</option>
        </select>
      </label>
      <button onClick={() => handleClick()}>Split Bill</button>
    </div>
  );
}

export default SplitTheBillForm;
