import * as model from './model.js';
import { KEY, MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

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

    // Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
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
  // paginationView.render(model.state.search, goToPage);
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // 3) Update the recipe servings (in state)
  model.updateServings(newServings);

  // 4) Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add or remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // console.log(model.state.recipe);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render all bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`); // using history api from browser, changing url without reloading the page. pushState() takes 3 arguments: state, title, url
    // window.history.back() // going to previous page when clicked browser button for backwards

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

// Delete recipe added by user
const controlDeleteRecipe = async function (id) {
  console.log('Deleting recipe with ID:', id);

  try {
    if (!id) throw new Error('Invalid recipe ID');
    if (model.state.recipe.id === id)
      // await model.deleteRecipe(model.state.recipe.id);
      await model.deleteRecipe(id, KEY);

    // Remove recipe from state
    // model.state.recipe = model.state.recipe.filter(recipe => recipe.id !== id);

    // Update bookmark view
    // model.deleteBookmark(state.recipe);
    bookmarksView.render(model.state.bookmarks);

    // Delete id from url
    window.history.replaceState(null, '', window.location.pathname);
    console.log('URL Updated:', window.location.href);

    // Show success message
  } catch (err) {
    console.error('Error deleting recipe', err);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerDeleteRecipe(controlDeleteRecipe);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagintaion);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

/*
 Publisher-Subscriber Design pattern - design patterns in programming are standard solutions to certain kinds of problems.
So in the publisher-Subscriber pattern we have a publisher which is some code that knows when to react. And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method, it will know when to react to the event.Subscriber is code that actually wants to react, code that should actually be executed when the event happens,in this case that is the controlRecipes function

Subscribe to the publisher by passing into subscriber function as an argument. That means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the view (bc the controller imports both view and model). As we call addHendlerRender, we pass in our controlRecipes function as an argument, subscribing controlRecipes to addHandlerRender. Now addHandlerRender listens for events using the addEventListener method as always, and then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener (as soon as the publisher publishes an event the subscriber will get called)
*/

// add readme

// code that we manualy deployed before to netlify is in dist folder, but since a practice is to add dist folder to git ignore, dist is not in repository then. but we tell netlify to run build commant whenever there is a change in repository (copying build command from package.json and pasting under build command)
