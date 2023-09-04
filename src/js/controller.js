import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Pollyfiling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////////////

const controlRecipes = async function () {
  try {
    // Getting recipe id from hash
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return; // guard clause if id is not present in address bar

    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

/////
// Events

// window.addEventListener('hashchange', controlRecipes); // listening for changing of hash (when clicked on hyperlink to recipe, its id is shown in address bar)
// window.addEventListener('load', controlRecipes); // when page is complited loading - if hash is not changed, when we put entire address in address bar

// adding multiple events with same handler function:
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
