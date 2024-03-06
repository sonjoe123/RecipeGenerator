import React from "react";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function SearchPage() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d2c93fde49334d79907bdb504e54bda9&number=15&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
    console.log(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <GridContainer>
      {searchedRecipe &&
        searchedRecipe.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        ))}
    </GridContainer>
  );
}
const GridContainer = styled.div`
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
export default SearchPage;
