import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const sumbitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={sumbitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  justify-content: center; /* Center horizontally */
  margin-top: 2rem; /* Add some top margin */

  div {
    position: relative;
    width: 700px; /* Adjust the width of the search box */
  }

  input {
    border: none;
    background: linear-gradient(
      to right,
      rgba(51, 51, 51, 0.7),
      rgba(0, 0, 0, 0.7)
    ); /* Adjust opacity to 0.7 */
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 15px; /* Adjust the position */
    transform: translateY(-50%);
    color: white;
  }
`;

export default Search;
