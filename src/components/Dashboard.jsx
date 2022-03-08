import React, { useContext } from "react";
import { PeopleContext } from "../context/People";
import { Filters, Grid, Input, Button } from "../designSystem/main";
import PersonCard from "./PersonCard";
import { sortBy } from "lodash";

const Dashboard = ({ setPeople, setObtainData }) => {
  const people = useContext(PeopleContext);

  const handleButton = (property) => {
    const sorted = sortBy(people, [property]);
    setPeople(sorted);
  };

  const handleSearch = (filter) => {
    if (filter.length > 0) {
      const filteredPeople = people.filter((p) =>
        p.name.first.toLowerCase().includes(filter)
      );
      setPeople(filteredPeople);
    } else {
      setObtainData(true);
    }
  };

  return (
    <>
      <Filters>
        <Input
          type="search"
          id="search"
          name="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button onClick={() => handleButton("name.first")}>
          Order by name
        </Button>
        <Button onClick={() => handleButton("gender")}>Order by gender</Button>
      </Filters>
      <Grid>
        {people?.length > 0 &&
          people?.map((person) => <PersonCard person={person} />)}
      </Grid>
    </>
  );
};

export default Dashboard;
