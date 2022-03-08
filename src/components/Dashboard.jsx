import React, { useContext } from "react";
import { PeopleContext } from "../context/People";
import { Filters, Grid } from "../designSystem/main";
import PersonCard from "./PersonCard";

const Dashboard = () => {
  const people = useContext(PeopleContext);
  return (
    <>
      <Filters>
        <input type="search" id="search" name="search" />
        <select name="select">
          <option value="Mail">mail</option>
          <option value="Cellphone" selected>
            cellphone
          </option>
          <option value="Location">location</option>
        </select>
      </Filters>
      <Grid>
        {people?.length > 0 &&
          people?.map((person) => <PersonCard person={person} />)}
      </Grid>
    </>
  );
};

export default Dashboard;
