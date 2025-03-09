import { useState } from "react";

import "./App.css";
import ListOfFriends from "./Components/ListOfFriends";
import AddFriendForm from "./Components/AddFriendForm";
import AddFriendButton from "./Components/AddFriendButton";
import SplitTheBillForm from "./Components/SplitTheBillForm";
function App() {
  const [friendList, setFriendList] = useState([
    {
      name: "Karen",
      moneyStatus: 2,
      imgSrc:
        "https://i1.sndcdn.com/avatars-000339084123-nag0p1-t1080x1080.jpg",
    },
    {
      name: "Stewerd",
      moneyStatus: -90,
      imgSrc: "https://live.staticflickr.com/3341/3484878448_bedd347e8d_z.jpg",
    },
    {
      name: "Stella",
      moneyStatus: 2,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWvEgFgbXQo6d1C5TidafTpJ725cuI1k3Ag&s",
    },
    {
      name: "Adrian",
      moneyStatus: 2,
      imgSrc:
        "https://pbs.twimg.com/profile_images/565288798494281728/3r7iZsIc_400x400.jpeg",
    },
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
