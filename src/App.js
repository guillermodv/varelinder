import React, { useEffect, useState } from "react";
import Main from "./Main";
import { PeopleContext } from "./context/People";

import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (next) {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => setUser(data.results[0]));
      setNext(false);
    }
  }, [setUser, next]);

  return (
    <PeopleContext.Provider value={user}>
      <Main setNext={setNext} />
    </PeopleContext.Provider>
  );
};

export default App;
