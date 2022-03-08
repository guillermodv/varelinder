import React, { useContext, useEffect, useState } from "react";
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

const Dashboard = ({ setPeople }) => {
  const people = useContext(PeopleContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [peopleToShow, setPeopleToShow] = useState();
  const [card, setCard] = useState();
  const [editedCard, setEditedCard] = useState();

  useEffect(() => setPeopleToShow(people), [people]);

  const onSubmit = () => {
    for (let i = 0; i < people.length; i++) {
      if (people[i].picture.large === editedCard?.picture?.large) {
        people[i].name.first = editedCard?.first
          ? editedCard.first
          : people[i].name.first;
        people[i].name.last = editedCard?.last
          ? editedCard?.last
          : people[i].name.last;
        people[i].email = editedCard?.email
          ? editedCard?.email
          : people[i].email;
        people[i].phone = editedCard?.phone
          ? editedCard?.phone
          : people[i].phone;
        people[i].location.state = editedCard?.state
          ? editedCard?.state
          : people[i].location.state;
        people[i].location.country = editedCard?.country
          ? editedCard?.country
          : people[i].location.country;
      }
    }
    setPeople(people);
    setIsOpen(false);
  };

  const handleButton = (property) => {
    const sorted = sortBy(people, [property]);
    setPeople(sorted);
  };

  const handleSearch = (filter) => {
    if (filter.length > 0) {
      const filteredPeople = people.filter((p) =>
        p.name.first.toLowerCase().includes(filter)
      );
      setPeopleToShow(filteredPeople);
    } else {
      setPeopleToShow(people);
    }
  };

  const handleChange = (event) => {
    setEditedCard({
      ...editedCard,
      ...card,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditedCard({});
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
        {peopleToShow?.length > 0 &&
          peopleToShow?.map((person) => (
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
          onRequestClose={handleClose}
          style={customStyles}
          contentLabel="Edit"
        >
          <ModalButton>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </ModalButton>
          <ModalTitle>Edit Card</ModalTitle>
          <div>
            <Line>
              <Label for="first">First Name:</Label>
              <InputModal
                id="first"
                defaultValue={card?.name.first}
                name="first"
                onChange={handleChange}
              />
            </Line>
            <Line>
              <Label for="last">Last Name:</Label>
              <InputModal
                id="last"
                name="last"
                defaultValue={card?.name.last}
                onChange={handleChange}
              />
            </Line>
            <Line>
              <Label for="mail">Mail:</Label>
              <InputModal
                id="email"
                name="email"
                defaultValue={card?.email}
                length={20}
                onChange={handleChange}
              />
            </Line>
            <Line>
              <Label for="state">Locality:</Label>
              <InputModal
                id="state"
                name="state"
                defaultValue={card?.location.state}
                onChange={handleChange}
              />
            </Line>
            <Line>
              <Label for="country">State:</Label>
              <InputModal
                id="country"
                name="country"
                defaultValue={card?.location.country}
                onChange={handleChange}
              />
            </Line>
            <ModalButton>
              <SaveButton onClick={onSubmit}>Save</SaveButton>
            </ModalButton>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
