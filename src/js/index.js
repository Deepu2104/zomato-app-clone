import Search from './models/Search' 
import Recipe from './models/recipe' 
import * as recipeView from './views/recipeViews'
import {elements, renderLoader, clearLoader} from './views/base'
import * as searchView from './views/searchView'

const state = {} 
const controlSearch = async() => {
    const query = searchView.getInput()
    if (query){
        state.search = new Search(query)
        searchView.clearInput()
        searchView.clearResults()
        
        renderLoader(elements.searchRes) 
        await state.search.getResults()
        clearLoader()
        
        searchView.renderResults(state.search.result)
        //state.search.result is actually a array of 30 results
        //of the (renderRecipes) function in searchView.js
    }
}
elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault()
    controlSearch()
})
elements.searchResPages.addEventListener('click',e => {
    let btn = e.target.closest('.btn-inline')
    if (btn){
        const goToPage = parseInt(btn.dataset.goto, 10)
        searchView.clearResults()
        searchView.renderResults(state.search.result, goToPage)

    }
})
//recipe controller....
const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    if (id){
        recipeView.clearRecipe()
        renderLoader(document.querySelector('.recipe'))
        state.recipe = new Recipe(id)
        try{
        await state.recipe.getRecipe()
        state.recipe.calcTime()
        state.recipe.calcServings()
        clearLoader()
        recipeView.renderRecipe(state.recipe)
    }catch(error){
        alert('error processing recipe')
    }
}}
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))



//i am here to rock the world.
