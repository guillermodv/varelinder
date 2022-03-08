import React, { useContext } from "react";
import { PeopleContext } from "../context/People";
import { Filters, Grid, Input, Select } from "../designSystem/main";
import PersonCard from "./PersonCard";

const Dashboard = ({ setPeople, setObtainData }) => {
  const people = useContext(PeopleContext);

  const handleSelect = (property) => {
    console.log("Select->", property);
    let orderedPeople = [];
    // eslint-disable-next-line default-case
    switch (property) {
      case "name":
        orderedPeople = people.sort(function (a, b) {
          return a.name.first > b.name.first;
        });
        console.log("orderedPeople", orderedPeople);
        break;
      case "mail":
        orderedPeople = people.sort(function (a, b) {
          return a.email > b.email;
        });
        console.log("orderedPeople", orderedPeople);
        break;
      case "cellphone":
        orderedPeople = people.sort(function (a, b) {
          return a.phone > b.phone;
        });
        console.log("orderedPeople", orderedPeople);
        break;
      case "location":
        orderedPeople = people.sort(function (a, b) {
          return a.location.state > b.location.state;
        });
        console.log("orderedPeople", orderedPeople);
        break;
    }
    setPeople(orderedPeople);
  };

  const handleSearch = (filter) => {
    if (filter.length > 0) {
      const filterPeople = people.filter((p) =>
        p.name.first.toLowerCase().includes(filter)
      );
      setPeople(filterPeople);
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
          onBlur={(e) => handleSearch(e.target.value)}
        />
        <Select name="select" onChange={(e) => handleSelect(e.target.value)}>
          <option value="name" selected>
            Name
          </option>
          <option value="mail">Mail</option>
          <option value="cellphone">Cellphone</option>
          <option value="location">Location</option>
        </Select>
      </Filters>
      <Grid>
        {people?.length > 0 &&
          people?.map((person) => <PersonCard person={person} />)}
      </Grid>
    </>
  );
};

export default Dashboard;
