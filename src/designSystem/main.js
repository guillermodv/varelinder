import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10%;
  width: 20rem;
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

export const Div = styled.div`
  padding: 1rem;
  justify-content: center;
`;

export const DataTitle = styled.div`
  text-align: center;
  padding-top: 2rem;
  background-color: rgb(80, 109, 246);
  height: 8rem;
  justify-content: center;
`;

export const DataBody = styled.div`
  background-color: white;
  color: grey;
`;
