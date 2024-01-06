import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import { useQuery } from "@tanstack/react-query";

const searchSingleCocktail = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const {data} = await axios.get(`${singleCocktailUrl}${id}`);
      return data.drinks;
    },
  };
};

export const loader = (queryClient) => async ({ params }) => {
  const { id } = params;
  await queryClient.ensureQueryData(searchSingleCocktail(id));
  return { id };
};
export default function Cocktail() {
  const { id: drinkId } = useLoaderData();

  const {data:drink} = useQuery(searchSingleCocktail(drinkId));
  if (!drink) return <Navigate to="/" />
  const singleDrink =  drink[0];
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  const validKeys = Object.keys(singleDrink)?.filter((key)=> key.includes('Ingredient') && singleDrink[key] !== null).map((key) => singleDrink[key]);
  return (
    <Wrapper>
      <header>
      <Link to="/" className="btn">Back to Home</Link>
      <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">
              Name :
            </span>
            {name}
          </p>
          <p>
            <span className="drink-data">
              Category :
            </span>
            {category}
          </p>
          <p>
            <span className="drink-data">
              Info :
            </span>
            {info}
          </p>
          <p>
            <span className="drink-data">
              Glass :
            </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">
              Ingredients :
            </span>
            {validKeys.map((key, i) => {
              return <span key={i} className="ing">{key}{i < validKeys.length -1 ? "," : ""} </span>
            })}
          </p>
          <p>
            <span className="drink-data">
              Instructions :
            </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
