import React from "react";
import {
  Avatar,
  EditButton,
  Card,
  Container,
  DataBody,
  DataTitle,
  Title,
} from "../designSystem/main";

import { FaPencilAlt } from "react-icons/fa";

const PersonCard = ({ person, setCard, setIsOpen }) => {
  const handleEditButton = () => {
    setCard(person);
    setIsOpen(true);
  };

  return (
    <Card>
      <Container>
        <DataTitle>
          <EditButton>
            <FaPencilAlt
              style={{ color: "white" }}
              onClick={handleEditButton}
            />
          </EditButton>
          <Title>
            {person?.name.first} {person?.name.last}
          </Title>
        </DataTitle>
        <DataBody>
          <Avatar src={person?.picture.large} />
          <h4>{person?.email} </h4>
          <h4>{person?.phone} </h4>
          <h4>
            {person?.location.state}, {person?.location.country}
          </h4>
        </DataBody>
      </Container>
    </Card>
  );
};
export default PersonCard;
