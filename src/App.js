import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  margin: 30px 0 10px;
`;

const Header = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  display: flex;
`;
const LogoutButton = styled.div`
  margin-left: 100px;
`;
const App = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        Expense Tracker{" "}
        <LogoutButton>
          <LogoutIcon
            onClick={() => {
              console.log("hello");
              navigate("/");
            }}
          ></LogoutIcon>
        </LogoutButton>
      </Header>
      <HomeComponent />
    </Container>
  );
};

export default App;
