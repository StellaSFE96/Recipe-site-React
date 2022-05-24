import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

// recipes

export const fetchRecipes = async () => {
    return await axios.get("/recipes");
}

export const fetchRecipesById = async (id: string) => {
    return await axios.get(`/recipes/${id}`);
}

export const fetchRecipesByQuery = async (query: string) => {
    return await axios.get(`/recipes?search=${query}`);
};

  // categories

export const fetchCategories = async () => {
    return await axios.get("/category");
}

export const fetchRecipesByCategory = async (category: string) => {
    // return await axios.get(`/category/${category}`);
    return await axios.get(`/category/${category}/recipes`);
    //category: string
}

export async function fetchRecipesByCategoryQuery(category: any, search: any){
    try {
        const response = await axios.get(`/category/${category}/recipes?search=${search}`)
        return response
    } catch (error: any){
        return error.response
    }
}

  // ratings and comments

  export async function postRating(recipeId: any, rating: any){
    try {
        const response = await axios.post(`/recipes/${recipeId}/ratings`, {ratings: rating})
        return response
    } catch (error: any){
        return error.response
    }
}

// export async function postRating(recipeId: any, rating: any){
//     try {
//         const response = await axios.post(`/recipes/${recipeId}`, {rating: rating})
//         return response
//     } catch (error: any){
//         return error.response
//     }
// }

// export const fetchRecipesByCategoriesAndQuery = async (category: string, query: string) => {
//     console.log("fetchRecipesByCategoriesAndQuery");
// return await axios.get(`/categories/${category}/recipes`);
// }


