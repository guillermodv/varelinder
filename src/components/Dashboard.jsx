import React, { useContext } from "react";
import { PeopleContext } from "../context/People";
import PersonCard from "./PersonCard";

const Dashboard = () => {
  const people = useContext(PeopleContext);
  return (
    people?.length > 0 &&
    people?.map((person) => <PersonCard person={person} />)
  );
};

export default Dashboard;
