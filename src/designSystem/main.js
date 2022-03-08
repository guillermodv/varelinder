import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5%;
  width: 30rem;
  padding: 20px;
  margin: 10px;
`;

export const Container = styled.div`
  text-align: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 70%;
  border: 5px solid white;
  transform: translate(0%, -40%);
`;

export const Title = styled.text`
  font-size: 30px;
  color: white;
`;

export const ModalTitle = styled.text`
  font-size: 25px;
  margin-left: 25px;
`;

export const Div = styled.div`
  padding: 1rem;
  justify-content: center;
`;

export const Filters = styled.div`
  justify-content: center;
  padding: 2rem;
  margin-left: 40px;
  margin-right: 20px;
`;

export const Grid = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  margin-left: 20px;
  margin-right: 20px;
  width: 15rem;
  height: 2rem;
`;

export const InputModal = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 15rem;
  height: 2rem;
`;

export const CloseButton = styled.button`
  margin-right: 20px;
  width: 2rem;
  height: 2rem;
  flex: 1;
  justify-content: left;
  background-color: white;
  border-color: transparent;
`;

export const EditButton = styled.div`
  width: 5rem;
  justify-content: left;
  background-color: transparent;
  border-color: transparent;
`;

export const SaveButton = styled.button`
  margin-right: 20px;
  margin-top: 10px;
  width: 5rem;
  height: 2rem;
  flex: 1;
  justify-content: left;
  background-color: white;
  border-color: grey;
`;

export const DataTitle = styled.div`
  text-align: center;
  padding-top: 2rem;
  background-color: rgb(80, 109, 246);
  height: 8rem;
  justify-content: center;
`;

export const ModalButton = styled.div`
  text-align: right;
  margin-top: 0rem;
  justify-content: center;
`;

export const DataBody = styled.div`
  background-color: white;
  color: grey;
`;

export const Label = styled.label`
  margin: 1rem;
  font-size: 20px;
`;

export const Line = styled.div`
  text-align: left;
  margin-top: 1rem;
`;
