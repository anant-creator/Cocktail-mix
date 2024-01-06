import React from 'react';
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';


const CocktailList = ({drinks}) => {
  const formattedList = drinks?.map((drink) => {
    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
    return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
  });
    return  <Wrapper>
      {formattedList?.map((item) => {
          return <CocktailCard key={item.id} {...item} />
        })
      }
    </Wrapper>
    

}

export default CocktailList