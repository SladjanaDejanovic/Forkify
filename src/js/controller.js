import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

// Pollyfiling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

///////////////////////////////////////////////

const controlRecipes = async function () {
  try {
    // Getting recipe id from hash
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
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

const controlPagintaion = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // add or remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  console.log(model.state.recipe);
  //update recipe view
  recipeView.update(model.state.recipe);

  // render all bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagintaion);
};

init();

/*
 Publisher-Subscriber Design pattern - design patterns in programming are standard solutions to certain kinds of problems.
So in the publisher-Subscriber pattern we have a publisher which is some code that knows when to react. And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method, it will know when to react to the event.Subscriber is code that actually wants to react, code that should actually be executed when the event happens,in this case that is the controlRecipes function

Solution - subscribe to the publisher by passing into subscriber function as an argument. that means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the view (bc the controller imports both view and model). as we call addHendlerRender, we pass in our controlRecipes function as an argument, essentially subscribing controlRecipes to addHandlerRender.And so now addHandlerRender listens for events using the addEventListener method as always. And then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener (as soon as the publisher publishes an event the subscriber will get called)
*/
