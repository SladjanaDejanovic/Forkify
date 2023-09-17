import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// Pollyfiling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// } // this is comming from parcel, it's not js

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

    // controlServings();
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlServings = function () {
  // Update the recipe servings (in state)
  model.updateServings(10);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};

const controlPagintaion = function (goToPage) {
  console.log(goToPage);
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagintaion);
};

init();

/*
 Publisher-Subscriber Design pattern - design patterns in programming are standard solutions to certain kinds of problems.
So in the publisher-Subscriber pattern we have a publisher which is some code that knows when to react. And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method, it will know when to react to the event.Subscriber is code that actually wants to react, code that should actually be executed when the event happens,in this case that is the controlRecipes function

Solution is that we can now subscribe to the publisher by passing into subscriber function as an argument. that means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the view (bc yhe controller imports both view and model). as we call addHendlerRender, we pass in our controlRecipes function as an argument, essentially subscribing controlRecipes to addHandlerRender.
And so at this point, the two functions are basically finally connected. And so now addHandlerRender listens for events using the addEventListener method as always. And then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener (as soon as the publisher publishes an event the subscriber will get called)
*/
