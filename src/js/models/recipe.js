import axios from 'axios'
export default class Recipe{
    constructor(id){
        this.id = id
    }
    async getRecipe(){
        const key = "0ed27706f078e87eedd9364228301ba4"
        try{
        let res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`)
        this.title = res.data.recipe.title
        this.img = res.data.recipe.image_url
        this.author = res.data.recipe.publisher
        this.url = res.data.recipe.source_url
        this.ingredients = res.data.recipe.ingredients
    }catch(error){
        console.log(error)
    }
}
    calcTime(){
        const numIng = this.ingredients.length
        const periods = Math.ceil(numIng /3)
        this.time = periods * 15

    }
    calcServings(){
        this.servings  = 4;
    }
}
 