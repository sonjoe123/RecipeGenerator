import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisineRecipe = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d2c93fde49334d79907bdb504e54bda9&number=9&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getCuisineRecipe(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <GridContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      duration={{ duration: 0.5 }}
    >
      {cuisine &&
        cuisine.map((item) => (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        ))}
    </GridContainer>
  );
}
const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(20rem, 1fr)
  ); /* Three columns */
  gap: 2rem; /* Gap between items */
`;
const Card = styled.div`
  justify-items: center;

  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
