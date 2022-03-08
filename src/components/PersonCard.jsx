import React from "react";
import {
  Avatar,
  Card,
  Container,
  DataBody,
  DataTitle,
  Title,
} from "../designSystem/main";

const PersonCard = ({ person }) => (
  <Card>
    <Container>
      <DataTitle>
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
export default PersonCard;
