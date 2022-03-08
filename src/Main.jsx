import React, { useContext, useEffect } from "react";
import { Avatar, Button, Container, Title } from "./components/design";
import { PeopleContext } from "./context/People";

const Main = ({ setNext }) => {
  const people = useContext(PeopleContext);
  const person = people;

  useEffect(() => {
    if (person?.gender !== "female") {
      setNext(true);
    }
  }, [person, setNext]);

  return (
    <Container>
      <div>
        <div>
          <Title>Varelinder</Title>
        </div>
        <div>
          <Avatar src={person?.picture.large} />
        </div>
        <div>
          <h3>
            {person?.name.first} {person?.name.last}
          </h3>
        </div>
        <div>
          <h5>Me encanta pelear en el llano y el sexo libre </h5>
        </div>
        <div>
          <div style={{ padding: "1rem" }}>
            <Button onClick={() => setNext(true)}> NO </Button>
            <Button onClick={() => setNext(true)}> SI </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
