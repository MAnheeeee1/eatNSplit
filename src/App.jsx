import { useState } from "react";

import "./App.css";
import ListOfFriends from "./Components/ListOfFriends";
import AddFriendForm from "./Components/AddFriendForm";
import AddFriendButton from "./Components/AddFriendButton";
import SplitTheBillForm from "./Components/SplitTheBillForm";
function App() {
  const [friendList, setFriendList] = useState([
    { name: "Robert", moneyStatus: 2, imgSrc: "./assets/react.svg" },
    { name: "Alice", moneyStatus: -90, imgSrc: "./assets/react.svg" },
    { name: "Stella", moneyStatus: 2, imgSrc: "./assets/react.svg" },
    { name: "Selma", moneyStatus: 2, imgSrc: "./assets/react.svg" },
  ]);
  const [currentSelected, setCurrentSelected] = useState("");
  const [openAddFriendForm, setOpenAddFriendForm] = useState(false);
  return (
    <>
      <ListOfFriends
        friendList={friendList}
        current={currentSelected}
        setCurrent={setCurrentSelected}
      />
      {openAddFriendForm == true ? (
        <AddFriendForm setFriendList={setFriendList} friendList={friendList} />
      ) : (
        <></>
      )}

      <AddFriendButton
        openAddFriendForm={openAddFriendForm}
        setOpenAddFriendForm={setOpenAddFriendForm}
      />
      {currentSelected != "" ? (
        <SplitTheBillForm
          currentSelected={currentSelected}
          friendlist={friendList}
          setfriendlist={setFriendList}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
