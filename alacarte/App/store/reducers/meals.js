import { MEALS } from "../../data/DummyData";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const newFavMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(newFavMeal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };
    default:
      return state;
  }

  return state;
};

export default mealsReducers;
