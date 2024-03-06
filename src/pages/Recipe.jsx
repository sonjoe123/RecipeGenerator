import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=d2c93fde49334d79907bdb504e54bda9`
    );
    const recipeData = await data.json();
    setRecipe(recipeData);
  };

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);

  return (
    <RecipeWrapper>
      <ImageWrapper>
        <img src={recipe.image} alt={recipe.title} />
        <Title>{recipe.title}</Title>
      </ImageWrapper>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <InstructionWrapper>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            </InstructionWrapper>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredients) => (
              <li key={ingredients.id}>{ingredients.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </RecipeWrapper>
  );
}

const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
`;

const ImageWrapper = styled.div`
  margin-right: 2rem;
`;

const Title = styled.h2`
  margin-top: 1rem;
`;

const Info = styled.div`
  flex: 1;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: rgba(0, 0, 0, 0.7);
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  &.active {
    background: black;
    color: white;
  }
`;

const InstructionWrapper = styled.div`
  h3 {
    font-size: 1.2em;
  }
`;

export default Recipe;
