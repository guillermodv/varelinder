import React, { useEffect, useState } from "react";
import { PeopleContext } from "./context/People";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [people, setPeople] = useState();
  const [obtainData, setObtainData] = useState(true);

  useEffect(() => {
    if (obtainData) {
      fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((data) => setPeople(data.results));
      setObtainData(false);
    }
  }, [setPeople, obtainData]);

  return (
    <PeopleContext.Provider value={people}>
      <Dashboard setPeople={setPeople} setObtainData={setObtainData} />
    </PeopleContext.Provider>
  );
};

export default App;
