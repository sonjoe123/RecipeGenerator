import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
function ForLinh() {
  const [forLinh, setForLinh] = useState([]);
  useEffect(() => {
    getForLinh();
  }, []);
  const getForLinh = async () => {
    const check = localStorage.getItem("forLinh");
    if (check) {
      setForLinh(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=d2c93fde49334d79907bdb504e54bda9&number=9&cuisine=vietnamese`
      );
      const data = await api.json();
      localStorage.setItem("forLinh", JSON.stringify(data.results));
      setForLinh(data.results);
      console.log(data.results);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>For Linh Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {forLinh &&
            forLinh.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0 rem;
  bottom: 20;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default ForLinh;
