// f864a1d3403fed4592a77028dc87fc9e (deepakrumal21@gmail.com)
// 0ed27706f078e87eedd9364228301ba4 (ds1354586@gmail.com)

import axios from 'axios'
export default class Search{
    constructor(query){
        this.query = query
    }
    async getResults(){
        try{
            const key = "0ed27706f078e87eedd9364228301ba4"
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = await (res.data.recipes)
        }catch(error) {
            alert(error)
        }
    }
}

