import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <List>
      <StyleLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyleLink>
      <StyleLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyleLink>
      <StyleLink to={"/cuisine/Korean"}>
        <GiNoodles />
        <h4>Korean</h4>
      </StyleLink>
      <StyleLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyleLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const StyleLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ); /* Adjust the opacity as needed */
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transformation: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }
  svg {
    color: white;

    fontsize: 1.5rem;
  }
  &.active {
    background: linear-gradient(
      rgba(0, 0, 255, 0.8),
      rgba(0, 0, 255, 0.8)
    ); /* Blue color with 80% opacity */
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
