import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { PeopleContext } from "../context/People";
import {
  Filters,
  Grid,
  Input,
  ModalTitle,
  Label,
  Line,
  CloseButton,
  EditButton,
  Button,
  ModalButton,
  InputModal,
  SaveButton,
} from "../designSystem/main";
import PersonCard from "./PersonCard";
import { sortBy } from "lodash";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Dashboard = ({ setPeople, setObtainData }) => {
  const people = useContext(PeopleContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState();

  const handleButton = (property) => {
    const sorted = sortBy(people, [property]);
    setPeople(sorted);
  };

  const handleSubmit = (property) => {
    setIsOpen(false);
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
      </Filters>
      <Grid>
        {people?.length > 0 &&
          people?.map((person) => (
            <PersonCard
              person={person}
              setIsOpen={setIsOpen}
              setCard={setCard}
            />
          ))}
      </Grid>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Edit"
        >
          <ModalButton>
            <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
          </ModalButton>
          <ModalTitle>Edit Card</ModalTitle>
          <Line>
            <Label for="name">First Name:</Label>
            <InputModal id="first" value={card?.name.first} name="first" />
          </Line>
          <Line>
            <Label for="name">Last Name:</Label>
            <InputModal id="last" name="last" value={card?.name.last} />
          </Line>
          <Line>
            <Label for="name">Mail:</Label>
            <InputModal
              id="email"
              name="email"
              value={card?.email}
              length={20}
            />
          </Line>
          <Line>
            <Label for="name">Locality:</Label>
            <InputModal id="state" name="state" value={card?.location.state} />
          </Line>
          <Line>
            <Label for="name">State:</Label>
            <InputModal
              id="country"
              name="country"
              value={card?.location.country}
            />
          </Line>
          <ModalButton>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </ModalButton>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
